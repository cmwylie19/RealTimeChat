import * as React from 'react';
import { mount } from 'enzyme';
import { Dropdown } from './Dropdown';
import { DropdownPosition, DropdownDirection } from './dropdownConstants';
import { InternalDropdownItem } from './InternalDropdownItem';
import { DropdownSeparator } from './Separator';
import { DropdownToggle } from './DropdownToggle';
import { KebabToggle } from './KebabToggle';
const dropdownItems = [React.createElement(InternalDropdownItem, {
  key: "link"
}, "Link"), React.createElement(InternalDropdownItem, {
  key: "action",
  component: "button"
}, "Action"), React.createElement(InternalDropdownItem, {
  key: "disabled link",
  isDisabled: true
}, "Disabled Link"), React.createElement(InternalDropdownItem, {
  key: "disabled action",
  isDisabled: true,
  component: "button"
}, "Disabled Action"), React.createElement(DropdownSeparator, {
  key: "separator"
}), React.createElement(InternalDropdownItem, {
  key: "separated link"
}, "Separated Link"), React.createElement(InternalDropdownItem, {
  key: "separated action",
  component: "button"
}, "Separated Action")];
describe('dropdown', () => {
  test('regular', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      position: DropdownPosition.right,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up,
      position: DropdownPosition.right,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('primary', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle",
        isPrimary: true
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('basic', () => {
    const view = mount(React.createElement(Dropdown, {
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, React.createElement("div", null, "BASIC")));
    expect(view).toMatchSnapshot();
  });
});
describe('KebabToggle', () => {
  test('regular', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      position: DropdownPosition.right,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      direction: DropdownDirection.up,
      position: DropdownPosition.right,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('plain', () => {
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isPlain: true,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('basic', () => {
    const view = mount(React.createElement(Dropdown, {
      isOpen: true,
      toggle: React.createElement(KebabToggle, {
        id: "Dropdown Toggle"
      })
    }, React.createElement("div", null, "BASIC")));
    expect(view).toMatchSnapshot();
  });
});
describe('API', () => {
  test('click on item', () => {
    const mockToggle = jest.fn();
    const mockSelect = jest.fn();
    const view = mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      onSelect: mockSelect,
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    view.find('a').first().simulate('click');
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(mockSelect.mock.calls).toHaveLength(1);
  });
  test('dropdownItems and children console error ', () => {
    expect(() => mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, React.createElement("div", null, "Children items")))).toThrowError();
  });
  test('dropdownItems only, no console error ', () => {
    const myMock = jest.fn();
    global.console = {
      error: myMock
    };
    mount(React.createElement(Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(myMock).not.toBeCalled();
  });
  test('children only, no console ', () => {
    const myMock = jest.fn();
    global.console = {
      error: myMock
    };
    mount(React.createElement(Dropdown, {
      isOpen: true,
      toggle: React.createElement(DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, React.createElement("div", null, "Children items")));
    expect(myMock).not.toBeCalled();
  });
});
//# sourceMappingURL=Dropdown.test.js.map