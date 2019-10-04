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
import { HatLogo, UserLogo } from '../assets/images'
import { Message, MessageInput, PageBreadcrumb } from '../components'
import { useHistory, useTheme, useUser } from '../reducers'
import { setStorage, getStorage } from '../libs'
import Keycloak from 'keycloak-js';

export default function DashboardContainer() {
  const theme = useTheme();
  const {name, avatar, email, userLogin, userLogout} = useUser();
  const [currentChat, setCurrentChat] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [authenticated, setAuthenticated] = useState();

  useEffect(() => {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({ onLoad: 'login-required' })
      .success(authenticated => {

        setStorage('keycloak', JSON.stringify(keycloak))
        setAuthenticated(authenticated)

        console.log('keycloak ' + JSON.stringify(keycloak, undefined, 2))

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
        <NavItem itemId={0} isActive={activeItem === 0}>
          Tiffany Jachja
          </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1}>
          Eric Murphy
          </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2}>
          Marshall Powell
          </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3}>
          Deven Phillips
          </NavItem>
        {/* <NavItem itemId={4} isActive={activeItem === 4}>
          Server
          </NavItem> */}
      </NavList>
    </Nav>
  );
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
    <DropdownItem>Separated Link</DropdownItem>,
    <DropdownItem component="button"
      onClick={() => history.push('/')}>Logout</DropdownItem>
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
      avatar={<Avatar src={avatar} alt="Avatar image" />}
      showNavToggle
    />
  );
  const Sidebar = <PageSidebar nav={PageNav} theme="dark" />;
  const pageId = 'main-content-page-layout-default-nav';
  const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;


  const history = useHistory();
  return (
    <Fragment>

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
              style={{ color: theme.secondary }}>Tiffany Jachja</Text>
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
            justifyContent: "space-between"
          }}>
          {/* Message Section */}
          <Fragment>
            {Array.apply(0, Array(1)).map((x, i) => (
              <Message
                type={i % 2 === 0 ? "sent" : "received"}
                body="Hello"
                primary={theme.primary}
              />
            ))}
          </Fragment>
          <Fragment>
            <MessageInput
              style={{ display: 'flex' }}
            />
          </Fragment>

        </PageSection>
      </Page>
    </Fragment>
  );
}

