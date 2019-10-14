"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Dropdown = require("./Dropdown");

var _dropdownConstants = require("./dropdownConstants");

var _InternalDropdownItem = require("./InternalDropdownItem");

var _Separator = require("./Separator");

var _DropdownToggle = require("./DropdownToggle");

var _KebabToggle = require("./KebabToggle");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var dropdownItems = [React.createElement(_InternalDropdownItem.InternalDropdownItem, {
  key: "link"
}, "Link"), React.createElement(_InternalDropdownItem.InternalDropdownItem, {
  key: "action",
  component: "button"
}, "Action"), React.createElement(_InternalDropdownItem.InternalDropdownItem, {
  key: "disabled link",
  isDisabled: true
}, "Disabled Link"), React.createElement(_InternalDropdownItem.InternalDropdownItem, {
  key: "disabled action",
  isDisabled: true,
  component: "button"
}, "Disabled Action"), React.createElement(_Separator.DropdownSeparator, {
  key: "separator"
}), React.createElement(_InternalDropdownItem.InternalDropdownItem, {
  key: "separated link"
}, "Separated Link"), React.createElement(_InternalDropdownItem.InternalDropdownItem, {
  key: "separated action",
  component: "button"
}, "Separated Action")];
describe('dropdown', function () {
  test('regular', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      position: _dropdownConstants.DropdownPosition.right,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      position: _dropdownConstants.DropdownPosition.right,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('primary', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle",
        isPrimary: true
      }, "Dropdown")
    }));
    expect(view).toMatchSnapshot();
  });
  test('basic', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      isOpen: true,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, React.createElement("div", null, "BASIC")));
    expect(view).toMatchSnapshot();
  });
});
describe('KebabToggle', function () {
  test('regular', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      toggle: React.createElement(_KebabToggle.KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      position: _dropdownConstants.DropdownPosition.right,
      toggle: React.createElement(_KebabToggle.KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      toggle: React.createElement(_KebabToggle.KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      position: _dropdownConstants.DropdownPosition.right,
      toggle: React.createElement(_KebabToggle.KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(_KebabToggle.KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('plain', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      isPlain: true,
      toggle: React.createElement(_KebabToggle.KebabToggle, {
        id: "Dropdown Toggle"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('basic', function () {
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      isOpen: true,
      toggle: React.createElement(_KebabToggle.KebabToggle, {
        id: "Dropdown Toggle"
      })
    }, React.createElement("div", null, "BASIC")));
    expect(view).toMatchSnapshot();
  });
});
describe('API', function () {
  test('click on item', function () {
    var mockToggle = jest.fn();
    var mockSelect = jest.fn();
    var view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      onSelect: mockSelect,
      isOpen: true,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    view.find('a').first().simulate('click');
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(mockSelect.mock.calls).toHaveLength(1);
  });
  test('dropdownItems and children console error ', function () {
    expect(function () {
      return (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        isOpen: true,
        toggle: React.createElement(_DropdownToggle.DropdownToggle, {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }, React.createElement("div", null, "Children items")));
    }).toThrowError();
  });
  test('dropdownItems only, no console error ', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }));
    expect(myMock).not.toBeCalled();
  });
  test('children only, no console ', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
      isOpen: true,
      toggle: React.createElement(_DropdownToggle.DropdownToggle, {
        id: "Dropdown Toggle"
      }, "Dropdown")
    }, React.createElement("div", null, "Children items")));
    expect(myMock).not.toBeCalled();
  });
});
//# sourceMappingURL=Dropdown.test.js.map