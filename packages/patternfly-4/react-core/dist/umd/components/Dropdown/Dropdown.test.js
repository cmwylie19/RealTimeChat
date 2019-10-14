(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Dropdown", "./dropdownConstants", "./InternalDropdownItem", "./Separator", "./DropdownToggle", "./KebabToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Dropdown"), require("./dropdownConstants"), require("./InternalDropdownItem"), require("./Separator"), require("./DropdownToggle"), require("./KebabToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Dropdown, global.dropdownConstants, global.InternalDropdownItem, global.Separator, global.DropdownToggle, global.KebabToggle);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Dropdown, _dropdownConstants, _InternalDropdownItem, _Separator, _DropdownToggle, _KebabToggle) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  const dropdownItems = [React.createElement(_InternalDropdownItem.InternalDropdownItem, {
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
  describe('dropdown', () => {
    test('regular', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        toggle: React.createElement(_DropdownToggle.DropdownToggle, {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        position: _dropdownConstants.DropdownPosition.right,
        toggle: React.createElement(_DropdownToggle.DropdownToggle, {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        toggle: React.createElement(_DropdownToggle.DropdownToggle, {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup + right aligned', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        position: _dropdownConstants.DropdownPosition.right,
        toggle: React.createElement(_DropdownToggle.DropdownToggle, {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('expanded', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        isOpen: true,
        toggle: React.createElement(_DropdownToggle.DropdownToggle, {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('primary', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        toggle: React.createElement(_DropdownToggle.DropdownToggle, {
          id: "Dropdown Toggle",
          isPrimary: true
        }, "Dropdown")
      }));
      expect(view).toMatchSnapshot();
    });
    test('basic', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        isOpen: true,
        toggle: React.createElement(_DropdownToggle.DropdownToggle, {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }, React.createElement("div", null, "BASIC")));
      expect(view).toMatchSnapshot();
    });
  });
  describe('KebabToggle', () => {
    test('regular', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        toggle: React.createElement(_KebabToggle.KebabToggle, {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        position: _dropdownConstants.DropdownPosition.right,
        toggle: React.createElement(_KebabToggle.KebabToggle, {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        toggle: React.createElement(_KebabToggle.KebabToggle, {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup + right aligned', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        position: _dropdownConstants.DropdownPosition.right,
        toggle: React.createElement(_KebabToggle.KebabToggle, {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('expanded', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        isOpen: true,
        toggle: React.createElement(_KebabToggle.KebabToggle, {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('plain', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        isPlain: true,
        toggle: React.createElement(_KebabToggle.KebabToggle, {
          id: "Dropdown Toggle"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('basic', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        isOpen: true,
        toggle: React.createElement(_KebabToggle.KebabToggle, {
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
      const view = (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
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
    test('dropdownItems and children console error ', () => {
      expect(() => (0, _enzyme.mount)(React.createElement(_Dropdown.Dropdown, {
        dropdownItems: dropdownItems,
        isOpen: true,
        toggle: React.createElement(_DropdownToggle.DropdownToggle, {
          id: "Dropdown Toggle"
        }, "Dropdown")
      }, React.createElement("div", null, "Children items")))).toThrowError();
    });
    test('dropdownItems only, no console error ', () => {
      const myMock = jest.fn();
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
    test('children only, no console ', () => {
      const myMock = jest.fn();
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
});
//# sourceMappingURL=Dropdown.test.js.map