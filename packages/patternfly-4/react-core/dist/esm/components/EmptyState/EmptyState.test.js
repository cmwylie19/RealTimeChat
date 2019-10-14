import * as React from 'react';
import { shallow } from 'enzyme';
import { AddressBookIcon } from '@patternfly/react-icons';
import { EmptyState, EmptyStateVariant } from './EmptyState';
import { EmptyStateBody } from './EmptyStateBody';
import { EmptyStateSecondaryActions } from './EmptyStateSecondaryActions';
import { EmptyStateIcon } from './EmptyStateIcon';
import { EmptyStatePrimary } from './EmptyStatePrimary';
import { Button } from '../Button';
import { Title } from '../Title';
import { BaseSizes } from '../../styles/sizes';
describe('EmptyState', () => {
  test('Main', () => {
    const view = shallow(React.createElement(EmptyState, null, React.createElement(Title, {
      headingLevel: "h5",
      size: "lg"
    }, "HTTP Proxies"), React.createElement(EmptyStateBody, null, "Defining HTTP Proxies that exist on your network allows you to perform various actions through those proxies."), React.createElement(Button, {
      variant: "primary"
    }, "New HTTP Proxy"), React.createElement(EmptyStateSecondaryActions, null, React.createElement(Button, {
      variant: "link",
      "aria-label": "learn more action"
    }, "Learn more about this in the documentation."))));
    expect(view).toMatchSnapshot();
  });
  test('Main variant regular', () => {
    const view = shallow(React.createElement(EmptyState, {
      variant: EmptyStateVariant.full
    }, React.createElement(Title, {
      size: BaseSizes.md
    }, "EmptyState full")));
    expect(view).toMatchSnapshot();
  });
  test('Main variant small', () => {
    const view = shallow(React.createElement(EmptyState, {
      variant: EmptyStateVariant.small
    }, React.createElement(Title, {
      size: BaseSizes.md
    }, "EmptyState small")));
    expect(view).toMatchSnapshot();
  });
  test('Body', () => {
    const view = shallow(React.createElement(EmptyStateBody, {
      className: "custom-empty-state-body",
      id: "empty-state-1"
    }));
    expect(view.props().className).toBe('pf-c-empty-state__body custom-empty-state-body');
    expect(view.props().id).toBe('empty-state-1');
  });
  test('Secondary Action', () => {
    const view = shallow(React.createElement(EmptyStateSecondaryActions, {
      className: "custom-empty-state-secondary",
      id: "empty-state-2"
    }));
    expect(view.props().className).toBe('pf-c-empty-state__secondary custom-empty-state-secondary');
    expect(view.props().id).toBe('empty-state-2');
  });
  test('Icon', () => {
    const view = shallow(React.createElement(EmptyStateIcon, {
      icon: AddressBookIcon,
      className: "custom-empty-state-icon",
      id: "empty-state-icon"
    }));
    expect(view.props().className).toBe('pf-c-empty-state__icon custom-empty-state-icon');
    expect(view.props().id).toBe('empty-state-icon');
  });
  test('Wrap icon in a div', () => {
    const view = shallow(React.createElement(EmptyStateIcon, {
      variant: "container",
      component: AddressBookIcon,
      className: "custom-empty-state-icon",
      id: "empty-state-icon"
    }));
    console.log(view.debug());
    expect(view.find('div').props().className).toBe('pf-c-empty-state__icon custom-empty-state-icon');
    expect(view.find('AddressBookIcon').length).toBe(1);
  });
  test('Primary div', () => {
    const view = shallow(React.createElement(EmptyStatePrimary, {
      className: "custom-empty-state-prim-cls",
      id: "empty-state-prim-id"
    }, React.createElement(Button, {
      variant: "link"
    }, "Link")));
    expect(view.props().className).toBe('pf-c-empty-state__primary custom-empty-state-prim-cls');
    expect(view.props().id).toBe('empty-state-prim-id');
  });
});
//# sourceMappingURL=EmptyState.test.js.map