"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Page_1 = require("./Page");
var PageHeader_1 = require("./PageHeader");
var PageSidebar_1 = require("./PageSidebar");
var PageSection_1 = require("./PageSection");
var Breadcrumb_1 = require("../Breadcrumb");
var SkipToContent_1 = require("../SkipToContent");
var props = {
    'aria-label': 'Page layout',
    'id': 'PageId',
    'className': 'my-page-class'
};
test('Check page vertical layout example against snapshot', function () {
    var Header = <PageHeader_1.PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" onNavToggle={function () { return undefined; }}/>;
    var Sidebar = <PageSidebar_1.PageSidebar nav="Navigation" isNavOpen/>;
    var view = enzyme_1.mount(<Page_1.Page {...props} header={Header} sidebar={Sidebar}>
      <PageSection_1.PageSection variant="default">Section with default background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="light">Section with light background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="dark">Section with dark background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="darker">Section with darker background</PageSection_1.PageSection>
    </Page_1.Page>);
    expect(view).toMatchSnapshot();
});
test('Check dark page against snapshot', function () {
    var Header = <PageHeader_1.PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" onNavToggle={function () { return undefined; }}/>;
    var Sidebar = <PageSidebar_1.PageSidebar nav="Navigation" isNavOpen theme="dark"/>;
    var view = enzyme_1.mount(<Page_1.Page {...props} header={Header} sidebar={Sidebar}>
      <PageSection_1.PageSection variant="default">Section with default background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="light">Section with light background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="dark">Section with dark background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="darker">Section with darker background</PageSection_1.PageSection>
    </Page_1.Page>);
    expect(view).toMatchSnapshot();
});
test('Check page horizontal layout example against snapshot', function () {
    var Header = <PageHeader_1.PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" topNav="Navigation"/>;
    var Sidebar = <PageSidebar_1.PageSidebar isNavOpen/>;
    var view = enzyme_1.mount(<Page_1.Page {...props} header={Header} sidebar={Sidebar}>
      <PageSection_1.PageSection variant="default">Section with default background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="light">Section with light background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="dark">Section with dark background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="darker">Section with darker background</PageSection_1.PageSection>
    </Page_1.Page>);
    expect(view).toMatchSnapshot();
});
test('Check page to verify breadcrumb is created', function () {
    var Header = <PageHeader_1.PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" topNav="Navigation"/>;
    var Sidebar = <PageSidebar_1.PageSidebar isNavOpen/>;
    var PageBreadcrumb = function () { return (<Breadcrumb_1.Breadcrumb>
      <Breadcrumb_1.BreadcrumbItem>Section Home</Breadcrumb_1.BreadcrumbItem>
      <Breadcrumb_1.BreadcrumbItem to="#">Section Title</Breadcrumb_1.BreadcrumbItem>
      <Breadcrumb_1.BreadcrumbItem to="#">Section Title</Breadcrumb_1.BreadcrumbItem>
      <Breadcrumb_1.BreadcrumbItem to="#" isActive>
        Section Landing
      </Breadcrumb_1.BreadcrumbItem>
    </Breadcrumb_1.Breadcrumb>); };
    var view = enzyme_1.mount(<Page_1.Page {...props} header={Header} sidebar={Sidebar} breadcrumb={<PageBreadcrumb />}>
      <PageSection_1.PageSection variant="default">Section with default background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="light">Section with light background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="dark">Section with dark background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="darker">Section with darker background</PageSection_1.PageSection>
    </Page_1.Page>);
    expect(view).toMatchSnapshot();
    expect(view.find('.pf-c-page__main').getDOMNode().id).toBe('');
});
test('Check page to verify skip to content points to main content region', function () {
    var Header = <PageHeader_1.PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" topNav="Navigation"/>;
    var Sidebar = <PageSidebar_1.PageSidebar isNavOpen/>;
    var PageBreadcrumb = (<Breadcrumb_1.Breadcrumb>
      <Breadcrumb_1.BreadcrumbItem>Section Home</Breadcrumb_1.BreadcrumbItem>
      <Breadcrumb_1.BreadcrumbItem to="#">Section Title</Breadcrumb_1.BreadcrumbItem>
      <Breadcrumb_1.BreadcrumbItem to="#">Section Title</Breadcrumb_1.BreadcrumbItem>
      <Breadcrumb_1.BreadcrumbItem to="#" isActive>
        Section Landing
      </Breadcrumb_1.BreadcrumbItem>
    </Breadcrumb_1.Breadcrumb>);
    var mainId = 'main-content-page-layout-test-nav';
    var PageSkipToContent = <SkipToContent_1.SkipToContent href={"#" + mainId}>Skip to Content</SkipToContent_1.SkipToContent>;
    var view = enzyme_1.mount(<Page_1.Page {...props} header={Header} sidebar={Sidebar} breadcrumb={PageBreadcrumb} skipToContent={PageSkipToContent} mainContainerId={mainId}>
      <PageSection_1.PageSection variant="default">Section with default background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="light">Section with light background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="dark">Section with dark background</PageSection_1.PageSection>
      <PageSection_1.PageSection variant="darker">Section with darker background</PageSection_1.PageSection>
    </Page_1.Page>);
    expect(view).toMatchSnapshot();
    expect(view.find('.pf-c-page').getDOMNode().id).toBe(props.id);
    expect(view.find('.pf-c-page__main').getDOMNode().id).toBe(mainId);
});
