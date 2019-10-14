"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var react_icons_1 = require("@patternfly/react-icons");
var EmptyState_1 = require("./EmptyState");
var EmptyStateBody_1 = require("./EmptyStateBody");
var EmptyStateSecondaryActions_1 = require("./EmptyStateSecondaryActions");
var EmptyStateIcon_1 = require("./EmptyStateIcon");
var EmptyStatePrimary_1 = require("./EmptyStatePrimary");
var Button_1 = require("../Button");
var Title_1 = require("../Title");
var sizes_1 = require("../../styles/sizes");
describe('EmptyState', function () {
    test('Main', function () {
        var view = enzyme_1.shallow(<EmptyState_1.EmptyState>
        <Title_1.Title headingLevel="h5" size="lg">HTTP Proxies</Title_1.Title>
        <EmptyStateBody_1.EmptyStateBody>
          Defining HTTP Proxies that exist on your network allows you to perform various actions through those proxies.
        </EmptyStateBody_1.EmptyStateBody>
        <Button_1.Button variant="primary">New HTTP Proxy</Button_1.Button>
        <EmptyStateSecondaryActions_1.EmptyStateSecondaryActions>
          <Button_1.Button variant="link" aria-label="learn more action">
            Learn more about this in the documentation.
          </Button_1.Button>
        </EmptyStateSecondaryActions_1.EmptyStateSecondaryActions>
      </EmptyState_1.EmptyState>);
        expect(view).toMatchSnapshot();
    });
    test('Main variant regular', function () {
        var view = enzyme_1.shallow(<EmptyState_1.EmptyState variant={EmptyState_1.EmptyStateVariant.full}>
        <Title_1.Title size={sizes_1.BaseSizes.md}>EmptyState full</Title_1.Title>
      </EmptyState_1.EmptyState>);
        expect(view).toMatchSnapshot();
    });
    test('Main variant small', function () {
        var view = enzyme_1.shallow(<EmptyState_1.EmptyState variant={EmptyState_1.EmptyStateVariant.small}>
        <Title_1.Title size={sizes_1.BaseSizes.md}>EmptyState small</Title_1.Title>
      </EmptyState_1.EmptyState>);
        expect(view).toMatchSnapshot();
    });
    test('Body', function () {
        var view = enzyme_1.shallow(<EmptyStateBody_1.EmptyStateBody className="custom-empty-state-body" id="empty-state-1"/>);
        expect(view.props().className).toBe('pf-c-empty-state__body custom-empty-state-body');
        expect(view.props().id).toBe('empty-state-1');
    });
    test('Secondary Action', function () {
        var view = enzyme_1.shallow(<EmptyStateSecondaryActions_1.EmptyStateSecondaryActions className="custom-empty-state-secondary" id="empty-state-2"/>);
        expect(view.props().className).toBe('pf-c-empty-state__secondary custom-empty-state-secondary');
        expect(view.props().id).toBe('empty-state-2');
    });
    test('Icon', function () {
        var view = enzyme_1.shallow(<EmptyStateIcon_1.EmptyStateIcon icon={react_icons_1.AddressBookIcon} className="custom-empty-state-icon" id="empty-state-icon"/>);
        expect(view.props().className).toBe('pf-c-empty-state__icon custom-empty-state-icon');
        expect(view.props().id).toBe('empty-state-icon');
    });
    test('Wrap icon in a div', function () {
        var view = enzyme_1.shallow(<EmptyStateIcon_1.EmptyStateIcon variant="container" component={react_icons_1.AddressBookIcon} className="custom-empty-state-icon" id="empty-state-icon"/>);
        console.log(view.debug());
        expect(view.find('div').props().className).toBe('pf-c-empty-state__icon custom-empty-state-icon');
        expect(view.find('AddressBookIcon').length).toBe(1);
    });
    test('Primary div', function () {
        var view = enzyme_1.shallow(<EmptyStatePrimary_1.EmptyStatePrimary className="custom-empty-state-prim-cls" id="empty-state-prim-id">
          <Button_1.Button variant="link">Link</Button_1.Button>
      </EmptyStatePrimary_1.EmptyStatePrimary>);
        expect(view.props().className).toBe('pf-c-empty-state__primary custom-empty-state-prim-cls');
        expect(view.props().id).toBe('empty-state-prim-id');
    });
});
