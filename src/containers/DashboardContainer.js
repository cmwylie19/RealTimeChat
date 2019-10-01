import React, { Fragment, useState } from 'react';
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
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
import { Message, MessageInput } from '../components'
import { useHistory, useTheme } from '../reducers'

export default function DashboardContainer() {
  const theme = useTheme();
  const [currentChat, setCurrentChat] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

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
            >Casey Wylie</DropdownToggle>}
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
      avatar={<Avatar src={UserLogo} alt="Avatar image" />}
      showNavToggle
    />
  );
  const Sidebar = <PageSidebar nav={PageNav} theme="dark" />;
  const pageId = 'main-content-page-layout-default-nav';
  const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

  const PageBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbItem>Section Home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section Landing
        </BreadcrumbItem>
    </Breadcrumb>
  );

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
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between"
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
           style={{display:'flex'}}
          />
          </Fragment>
         
        </PageSection>
      </Page>
    </Fragment>
  );
}

