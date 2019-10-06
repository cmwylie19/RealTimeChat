import React, { Fragment, useState, useEffect } from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { orangeTheme, blueTheme, greenTheme } from '../assets/themes'
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import { HatLogo } from '../assets/images'
import { Message, MessageInput, PageBreadcrumb, Upload } from '../components'
import { useTheme, useUser, SocketConsumer } from '../reducers'
import { parseCookie, deleteSession, setStorage, setSession, readCookies, setCookie, fetchAll, clearCookies } from '../libs'
import Keycloak from 'keycloak-js';


let kcCopy;
var cookie;
export default function DashboardContainer() {

  const theme = useTheme();
  const [edit, setEdit] = useState(false);
  const { name, avatar, email, userLogin, userLogout, setAvatar } = useUser();
  const [OnlineUsers, setOnlineUsers] = useState([]);
  const [CurrentChat, setCurrentChat] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [username, setUsername] = useState();

  try {
    cookie = parseCookie(document.cookie);
  }
  catch (err) {
    console.log(err)
  }
  useEffect(async () => {
    const keycloak = Keycloak('/keycloak.json');
    if (cookie === null || cookie === undefined) {
      keycloak.init({ onLoad: 'login-required' })
        .success(async authenticated => {
          const { given_name, family_name, preferred_username, name, email } = keycloak.idTokenParsed;
          const { refreshToken, refreshTokenParsed, idToken, idTokenParsed, token, tokenParsed } = keycloak;
          const { realm_access, resource_access } = keycloak.tokenParsed;
          let realmAccessRoles = realm_access.roles;
          let accountRoles = resource_access.account.roles
          setUsername(preferred_username.split('@')[0]);
          userLogin(
            given_name,
            family_name,
            preferred_username,
            name,
            refreshToken,
            idToken,
            token,
            accountRoles,
            realmAccessRoles,
            email
          )
          setCookie('idTokenParsed', idTokenParsed)
          setCookie('keycloak', keycloak)
          setCookie("refreshToken", refreshToken, refreshTokenParsed.exp);
          setCookie("idToken", idToken, idTokenParsed.exp);
          setCookie("token", token, tokenParsed.exp);
          setStorage('keycloak', JSON.stringify(keycloak))
          readCookies();
          kcCopy = Object.assign({}, keycloak);


          await setSession(idTokenParsed.exp, idToken, preferred_username.split('@')[0])
          let onlines = await fetchAll();

          setOnlineUsers([...onlines.data])
          setCurrentChat(onlines.data[0])

          keycloak.updateToken(70).success(refreshed => {
            if (refreshed) {
              console.debug('Token refreshed' + refreshed);
              setStorage("REFRESH-TOKEN", JSON.stringify(refreshed))
            } else {
              console.warn('Token not refreshed, valid for '
                + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
          }).error(() => {
            console.error('Failed to refresh token');
          });
        })
    } else {

      let { log } = console;
      let parsedCookie = parseCookie(document.cookie)
      log('idTokenParsed ' + '\n\n\n' + document.cookie)
      let cookieUser = JSON.parse(parsedCookie.idTokenParsed)
      // console.log(decodeURI(idToken))
      console.log('parsedToken ' + JSON.stringify(cookieUser, undefined, 2));
      userLogin(
        cookieUser.given_name,
        cookieUser.family_name,
        cookieUser.preferred_username,
        cookieUser.name,
        parsedCookie.refreshToken,
        parsedCookie.idToken,
        parsedCookie.token,
        null,
        null,
        cookieUser.email
      )
      setUsername(cookieUser.preferred_username.split('@')[0]);
      let onlines = await fetchAll();
      setOnlineUsers([...onlines.data])
    }
  }, {})


  const onDropdownToggle = open => {
    setIsDropdownOpen(open)
  }

  const onDropdownSelect = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const onKebabDropdownToggle = open => {
    setIsKebabDropdownOpen(open)
  }

  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen)
  }

  const onNavSelect = result => {
    setActiveItem(result.itemId)
  }


  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav" theme="dark">
      <NavList>
        {Array.from(new Set(OnlineUsers))
          .map((user, i) => {
            return username !== user && <NavItem itemId={i} isActive={activeItem === i} onClick={() => setCurrentChat(user)}>
              {user}
            </NavItem>
          })}
      </NavList>
    </Nav>
  )
  const kebabDropdownItems = [
    <DropdownItem>
      <BellIcon /> Notifications
      </DropdownItem>,
    <DropdownItem>
      <CogIcon /> Settings
      </DropdownItem>
  ];
  const userDropdownItems = [
    <DropdownItem
      style={{ color: greenTheme.primary }}
      onClick={() => theme.setGreenTheme()}>Green Theme</DropdownItem>,
    <DropdownItem
      style={{ color: orangeTheme.primary }}
      onClick={() => theme.setOrangeTheme()}
      component="button">Orange Theme</DropdownItem>,
    <DropdownItem
      style={{ color: blueTheme.primary }}
      onClick={() => theme.setBlueTheme()}>Blue Theme</DropdownItem>,
    <DropdownItem isDisabled component="button">
      Disabled Action
      </DropdownItem>,
    <DropdownSeparator />,
    <DropdownItem onClick={() => setEdit(!edit)}>Edit Avatar</DropdownItem>,
    <DropdownItem component="button"
      //onClick={() => history.push('/')
      onClick={async () => {
        clearCookies();
        userLogout();
        deleteSession(username);
        //logout(clearCookies())
        // clearCookies();
        // deleteSession(username);
        // userLogout(); 
        // clearCookies();
        // deleteSession(username);
        // let request = async () => await instance('http://localhost:8080').get('/auth/realms/Chat/protocol/openid-connect/logout')
        // let result = await request()

      }}
    >Logout</DropdownItem>
  ];
  const PageToolbar = (
    <Toolbar>
      <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
        <ToolbarItem>
          <Button id="default-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
            <BellIcon />
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button id="default-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
            <CogIcon />
          </Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
          <Dropdown
            isPlain
            position="right"
            onSelect={onKebabDropdownSelect}
            toggle={<KebabToggle onToggle={onKebabDropdownToggle} />}
            isOpen={isKebabDropdownOpen}
            dropdownItems={kebabDropdownItems}
          />
        </ToolbarItem>
        <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
          <Dropdown
            isPlain
            position="right"
            onSelect={onDropdownSelect}
            isOpen={isDropdownOpen}
            toggle={<DropdownToggle onToggle={onDropdownToggle}
            >{name}</DropdownToggle>}
            dropdownItems={userDropdownItems}
          />
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  );

  const Header = (
    <PageHeader
      logo={<Brand src={HatLogo} alt="Patternfly Logo" />}
      toolbar={PageToolbar}
      avatar={<Upload avatar={avatar} setAvatar={setAvatar} edit={edit} toggleEdit={() => setEdit(!edit)} />}
      showNavToggle
    />
  );
  const Sidebar = <PageSidebar nav={PageNav} theme="dark" />;
  const pageId = 'main-content-page-layout-default-nav';
  const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

  return (
    <Fragment>
      <SocketConsumer>
        {socket => (
          <Page
            style={{ height: "100vh" }}
            header={Header}
            sidebar={Sidebar}
            isManagedSidebar
            skipToContent={PageSkipToContent}
            breadcrumb={PageBreadcrumb}
            mainContainerId={pageId}
          >
            <PageSection variant={PageSectionVariants.light}>
              <TextContent>
                <Text component="h1"
                  style={{ color: theme.secondary }}>{CurrentChat}</Text>
                <Text component="p">
                  Online Since 3:15pm<br />
                  AppDev CoE
              </Text>
              </TextContent>
            </PageSection>
            <PageSection
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",

              }}>
              <Fragment>
                {socket.msg.map((message, i) => {
                  console.log(message)
                  return <Message
                    primary={theme.primary}
                    key={i}
                    type={message.from === username ? "sent" : "received"}
                    body={message.content}
                  />
                })}
              </Fragment>
              <Fragment>
                <MessageInput
                  id={socket.id}
                  username={username}
                  sendMessage={(to, from, content) => socket.sendMessage(to, from, content)}
                  CurrentChat={CurrentChat}
                  style={{ display: 'flex' }}
                />
              </Fragment>

            </PageSection>
          </Page>
        )}
      </SocketConsumer>
    </Fragment>
  );
}

