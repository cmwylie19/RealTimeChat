(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.index);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _index) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('component render', () => {
    test('should render correctly top', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 20
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('should render correctly bottom', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 20,
        variant: _index.PaginationVariant.bottom
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('should render correctly compact', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 20,
        isCompact: true
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('should render correctly disabled', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 20,
        isDisabled: true
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('limited number of pages', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 20,
        perPage: 20
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('zero results', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 0
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('last page', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 20,
        perPage: 10,
        page: 2
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('custom perPageOptions', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 40,
        perPageOptions: [{
          title: 'some',
          value: 1
        }]
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('empty per page options', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 40,
        perPageOptions: []
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('no items', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 0
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('custom start end', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 40,
        itemsStart: 5,
        itemsEnd: 15
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('titles', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 40,
        titles: {
          items: 'values',
          page: 'books'
        }
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('custom pagination toggle', () => {
      const wrapper = (0, _enzyme.mount)( // eslint-disable-next-line no-template-curly-in-string
      _react2.default.createElement(_index.Pagination, {
        itemCount: 40,
        toggleTemplate: '${firstIndex} - ${lastIndex} - ${itemCount} - ${itemsTitle}'
      }));
      expect(wrapper).toMatchSnapshot();
    });
    test('up drop direction', () => {
      const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
        itemCount: 40,
        dropDirection: "up"
      }));
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('API', () => {
    describe('onSetPage', () => {
      const onSetPage = jest.fn();
      test('should call first', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40,
          page: 2
        }));
        wrapper.find('[data-action="first"]').first().simulate('click');
        expect(onSetPage.mock.calls).toHaveLength(1);
        expect(onSetPage.mock.calls[0][1]).toBe(1);
      });
      test('should call previous', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40,
          page: 3
        }));
        wrapper.find('[data-action="previous"]').first().simulate('click');
        expect(onSetPage.mock.calls).toHaveLength(1);
        expect(onSetPage.mock.calls[0][1]).toBe(2);
      });
      test('should call next', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('[data-action="next"]').first().simulate('click');
        expect(onSetPage.mock.calls).toHaveLength(1);
        expect(onSetPage.mock.calls[0][1]).toBe(2);
      });
      test('should call last', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('[data-action="last"]').first().simulate('click');
        expect(onSetPage.mock.calls).toHaveLength(1);
        expect(onSetPage.mock.calls[0][1]).toBe(4);
      });
      test('should call input', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('input').first().simulate('change', {
          target: {
            value: '1'
          }
        }).simulate('keydown', {
          keyCode: 13
        });
        expect(onSetPage.mock.calls).toHaveLength(1);
        expect(onSetPage.mock.calls[0][1]).toBe(1);
      });
      test('should call input wrong value', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('input').first().simulate('change', {
          target: {
            value: 'a'
          }
        }).simulate('keydown', {
          keyCode: 13
        });
        expect(onSetPage.mock.calls).toHaveLength(1);
        expect(onSetPage.mock.calls[0][1]).toBe(1);
      });
      test('should call input huge page number', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('input').first().simulate('change', {
          target: {
            value: '10'
          }
        }).simulate('keydown', {
          keyCode: 13
        });
        expect(onSetPage.mock.calls).toHaveLength(1);
        expect(onSetPage.mock.calls[0][1]).toBe(4);
      });
      test('should call input small page number', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onSetPage: onSetPage,
          itemCount: 40
        }));
        wrapper.find('input').first().simulate('change', {
          target: {
            value: '-10'
          }
        }).simulate('keydown', {
          keyCode: 13
        });
        expect(onSetPage.mock.calls).toHaveLength(1);
        expect(onSetPage.mock.calls[0][1]).toBe(1);
      });
      test('should NOT call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('[data-action="last"]').first().simulate('click');
        expect(onSetPage.mock.calls).toHaveLength(0);
      });
    });
    describe('onFirst', () => {
      const onFirst = jest.fn();
      test('should call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onFirstClick: onFirst,
          itemCount: 40,
          page: 2
        }));
        wrapper.find('[data-action="first"]').first().simulate('click');
        expect(onFirst.mock.calls).toHaveLength(1);
        expect(onFirst.mock.calls[0][1]).toBe(1);
      });
      test('should NOT call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          itemCount: 40,
          page: 2
        }));
        wrapper.find('[data-action="first"]').first().simulate('click');
        expect(onFirst.mock.calls).toHaveLength(0);
      });
    });
    describe('onLast', () => {
      const onLast = jest.fn();
      test('should call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onLastClick: onLast,
          itemCount: 40
        }));
        wrapper.find('[data-action="last"]').first().simulate('click');
        expect(onLast.mock.calls).toHaveLength(1);
        expect(onLast.mock.calls[0][1]).toBe(4);
      });
      test('should NOT call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('[data-action="last"]').first().simulate('click');
        expect(onLast.mock.calls).toHaveLength(0);
      });
    });
    describe('onPrevious', () => {
      const onPrevious = jest.fn();
      test('should call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onPreviousClick: onPrevious,
          itemCount: 40,
          page: 3
        }));
        wrapper.find('[data-action="previous"]').first().simulate('click');
        expect(onPrevious.mock.calls).toHaveLength(1);
        expect(onPrevious.mock.calls[0][1]).toBe(2);
      });
      test('should NOT call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('[data-action="previous"]').first().simulate('click');
        expect(onPrevious.mock.calls).toHaveLength(0);
      });
    });
    describe('onNext', () => {
      const onNext = jest.fn();
      test('should call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onNextClick: onNext,
          itemCount: 40
        }));
        wrapper.find('[data-action="next"]').first().simulate('click');
        expect(onNext.mock.calls).toHaveLength(1);
        expect(onNext.mock.calls[0][1]).toBe(2);
      });
      test('should NOT call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('[data-action="previous"]').first().simulate('click');
        expect(onNext.mock.calls).toHaveLength(0);
      });
    });
    describe('onPerPage', () => {
      const onPerPage = jest.fn();
      test('should call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          onPerPageSelect: onPerPage,
          itemCount: 40
        }));
        wrapper.find('.pf-c-options-menu button').first().simulate('click');
        wrapper.update();
        wrapper.find('ul li [data-action="per-page-20"]').first().simulate('click');
        expect(onPerPage.mock.calls).toHaveLength(1);
        expect(onPerPage.mock.calls[0][1]).toBe(20);
      });
      test('should NOT call', () => {
        const wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.Pagination, {
          itemCount: 40
        }));
        wrapper.find('.pf-c-options-menu button').first().simulate('click');
        wrapper.update();
        wrapper.find('ul li [data-action="per-page-20"]').first().simulate('click');
        expect(onPerPage.mock.calls).toHaveLength(0);
      });
    });
  });
});
//# sourceMappingURL=Pagination.test.js.map