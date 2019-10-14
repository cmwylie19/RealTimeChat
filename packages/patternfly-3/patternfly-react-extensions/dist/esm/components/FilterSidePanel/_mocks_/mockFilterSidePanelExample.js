var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import FilterSidePanel from '../FilterSidePanel';
import Icon from 'patternfly-react/dist/esm/components/Icon/Icon';
import FormControl from 'patternfly-react/dist/esm/components/FormControl/FormControl';

var MockFilterSidePanelExample = function (_React$Component) {
  _inherits(MockFilterSidePanelExample, _React$Component);

  function MockFilterSidePanelExample() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MockFilterSidePanelExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MockFilterSidePanelExample.__proto__ || Object.getPrototypeOf(MockFilterSidePanelExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeFilters: {
        typeSUV: false,
        typeSedan: false,
        typePickup: false,
        typeSports: false,
        makeChevy: false,
        makeFord: false,
        makeDodge: false,
        makeVolkswagen: false,
        makeHyundai: false,
        makeHonda: false,
        makeToyota: false,
        makeMercedes: false,
        makeBMW: false,
        makeInfiniti: false,
        makeLexus: false,
        makeAcura: false,
        paymentPaypal: false,
        paymentDiscover: false,
        paymentVisa: false,
        paymentMastercard: false,
        paymentAmex: false,
        paymentDinersClub: false,
        mileage50: false,
        mileage40: false,
        mileage30: false,
        mileage20: false,
        mileage10: false,
        rating5: false,
        rating4: false,
        rating3: false,
        rating2: false,
        rating1: false
      },
      showAllCategories: {
        type: false,
        make: false,
        paymentOptions: false,
        mileage: false,
        rating: false
      }
    }, _this.onShowAllToggle = function (id) {
      var showAllCategories = _extends({}, _this.state.showAllCategories);
      showAllCategories[id] = !showAllCategories[id];
      _this.setState({ showAllCategories: showAllCategories });
    }, _this.onFilterChange = function (id, value) {
      var activeFilters = _extends({}, _this.state.activeFilters);
      activeFilters[id] = value;
      _this.setState({ activeFilters: activeFilters });
    }, _this.getStars = function (count) {
      var stars = [];

      for (var i = 0; i < count; i++) {
        stars.push(React.createElement(Icon, { key: 'star_' + i, type: 'fa', name: 'star' }));
      }

      return React.createElement(
        'span',
        null,
        React.createElement(
          'span',
          { className: 'sr-only' },
          count + ' stars'
        ),
        stars
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MockFilterSidePanelExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          activeFilters = _state.activeFilters,
          showAllCategories = _state.showAllCategories;
      var _props = this.props,
          maxShowCount = _props.maxShowCount,
          leeway = _props.leeway;


      return React.createElement(
        FilterSidePanel,
        { id: 'filter-panel' },
        React.createElement(
          FilterSidePanel.Category,
          null,
          React.createElement(FormControl, { type: 'text', placeholder: 'Filter by name', bsClass: 'form-control' })
        ),
        React.createElement(
          FilterSidePanel.Category,
          {
            title: 'Type',
            maxShowCount: maxShowCount,
            leeway: leeway,
            showAll: showAllCategories.type,
            onShowAllToggle: function onShowAllToggle() {
              return _this2.onShowAllToggle('type');
            }
          },
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 23,
              checked: activeFilters.typeSUV,
              onChange: function onChange(e) {
                return _this2.onFilterChange('typeSUV', e.target.checked);
              }
            },
            'SUV'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 11,
              checked: activeFilters.typeSedan,
              onChange: function onChange(e) {
                return _this2.onFilterChange('typeSedan', e.target.checked);
              }
            },
            'Sedan'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 5,
              checked: activeFilters.typePickup,
              onChange: function onChange(e) {
                return _this2.onFilterChange('typePickup', e.target.checked);
              }
            },
            'Pickup Truck'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 3,
              checked: activeFilters.typeSports,
              onChange: function onChange(e) {
                return _this2.onFilterChange('typeSports', e.target.checked);
              }
            },
            'Sports Car'
          )
        ),
        React.createElement(
          FilterSidePanel.Category,
          {
            title: 'Manufacturer',
            maxShowCount: maxShowCount,
            leeway: leeway,
            showAll: showAllCategories.manufacturer,
            onShowAllToggle: function onShowAllToggle() {
              return _this2.onShowAllToggle('manufacturer');
            }
          },
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 6,
              checked: activeFilters.makeChevy,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeChevy', e.target.checked);
              }
            },
            'Chevrolet'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 5,
              checked: activeFilters.makeFord,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeFord', e.target.checked);
              }
            },
            'Ford'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 7,
              checked: activeFilters.makeDodge,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeDodge', e.target.checked);
              }
            },
            'Dodge'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 4,
              checked: activeFilters.makeVolkswagen,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeVolkswagen', e.target.checked);
              }
            },
            'Volkswagen'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 2,
              checked: activeFilters.makeHyundai,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeHyundai', e.target.checked);
              }
            },
            'Hyundai'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 3,
              checked: activeFilters.makeHonda,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeHonda', e.target.checked);
              }
            },
            'Honda'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 6,
              checked: activeFilters.makeToyota,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeToyota', e.target.checked);
              }
            },
            'Toyota'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 2,
              checked: activeFilters.makeMercedes,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeMercedes', e.target.checked);
              }
            },
            'Mercedes'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 2,
              checked: activeFilters.makeBMW,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeBMW', e.target.checked);
              }
            },
            'BMW'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 1,
              checked: activeFilters.makeInfiniti,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeInfiniti', e.target.checked);
              }
            },
            'Infiniti'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 1,
              checked: activeFilters.makeLexus,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeLexus', e.target.checked);
              }
            },
            'Lexus'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 0,
              checked: activeFilters.makeAcura,
              onChange: function onChange(e) {
                return _this2.onFilterChange('makeAcura', e.target.checked);
              }
            },
            'Acura'
          )
        ),
        React.createElement(
          FilterSidePanel.Category,
          {
            title: 'Payment Options',
            maxShowCount: maxShowCount,
            leeway: leeway,
            showAll: showAllCategories.payment,
            onShowAllToggle: function onShowAllToggle() {
              return _this2.onShowAllToggle('payment');
            }
          },
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              icon: React.createElement(Icon, { type: 'fa', name: 'cc-paypal' }),
              checked: activeFilters.paymentPaypal,
              onChange: function onChange(e) {
                return _this2.onFilterChange('paymentPaypal', e.target.checked);
              }
            },
            'PayPal'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              icon: React.createElement(Icon, { type: 'fa', name: 'cc-discover' }),
              checked: activeFilters.paymentDiscover,
              onChange: function onChange(e) {
                return _this2.onFilterChange('paymentDiscover', e.target.checked);
              }
            },
            'Discover'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              icon: React.createElement(Icon, { type: 'fa', name: 'cc-visa' }),
              checked: activeFilters.paymentVisa,
              onChange: function onChange(e) {
                return _this2.onFilterChange('paymentVisa', e.target.checked);
              }
            },
            'Visa'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              icon: React.createElement(Icon, { type: 'fa', name: 'cc-mastercard' }),
              checked: activeFilters.paymentMastercard,
              onChange: function onChange(e) {
                return _this2.onFilterChange('paymentMastercard', e.target.checked);
              }
            },
            'Mastercard'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              icon: React.createElement(Icon, { type: 'fa', name: 'cc-amex' }),
              checked: activeFilters.paymentAmex,
              onChange: function onChange(e) {
                return _this2.onFilterChange('paymentAmex', e.target.checked);
              }
            },
            'American Express'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              icon: React.createElement(Icon, { type: 'fa', name: 'cc-diners-club' }),
              checked: activeFilters.paymentDinersClub,
              onChange: function onChange(e) {
                return _this2.onFilterChange('paymentDinersClub', e.target.checked);
              }
            },
            'Diner\'s Club'
          )
        ),
        React.createElement(
          FilterSidePanel.Category,
          {
            title: 'Fuel Mileage',
            maxShowCount: maxShowCount,
            leeway: leeway,
            showAll: showAllCategories.mileage,
            onShowAllToggle: function onShowAllToggle() {
              return _this2.onShowAllToggle('mileage');
            }
          },
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 3,
              checked: activeFilters.mileage50,
              onChange: function onChange(e) {
                return _this2.onFilterChange('mileage50', e.target.checked);
              }
            },
            '50+'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 7,
              checked: activeFilters.mileage40,
              onChange: function onChange(e) {
                return _this2.onFilterChange('mileage40', e.target.checked);
              }
            },
            '40-50'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 9,
              checked: activeFilters.mileage30,
              onChange: function onChange(e) {
                return _this2.onFilterChange('mileage30', e.target.checked);
              }
            },
            '30-40'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 12,
              checked: activeFilters.mileage20,
              onChange: function onChange(e) {
                return _this2.onFilterChange('mileage20', e.target.checked);
              }
            },
            '20-30'
          ),
          React.createElement(
            FilterSidePanel.CategoryItem,
            {
              count: 8,
              checked: activeFilters.mileage10,
              onChange: function onChange(e) {
                return _this2.onFilterChange('mileage10', e.target.checked);
              }
            },
            '< 20'
          )
        ),
        React.createElement(
          FilterSidePanel.Category,
          {
            title: 'Rating',
            maxShowCount: maxShowCount,
            leeway: leeway,
            showAll: showAllCategories.rating,
            onShowAllToggle: function onShowAllToggle() {
              return _this2.onShowAllToggle('rating');
            }
          },
          React.createElement(FilterSidePanel.CategoryItem, {
            count: 2,
            icon: this.getStars(5),
            checked: activeFilters.rating5,
            onChange: function onChange(e) {
              return _this2.onFilterChange('rating5', e.target.checked);
            }
          }),
          React.createElement(FilterSidePanel.CategoryItem, {
            count: 12,
            icon: this.getStars(4),
            checked: activeFilters.rating4,
            onChange: function onChange(e) {
              return _this2.onFilterChange('rating4', e.target.checked);
            }
          }),
          React.createElement(FilterSidePanel.CategoryItem, {
            count: 8,
            icon: this.getStars(3),
            checked: activeFilters.rating3,
            onChange: function onChange(e) {
              return _this2.onFilterChange('rating3', e.target.checked);
            }
          }),
          React.createElement(FilterSidePanel.CategoryItem, {
            count: 5,
            icon: this.getStars(2),
            checked: activeFilters.rating2,
            onChange: function onChange(e) {
              return _this2.onFilterChange('rating2', e.target.checked);
            }
          }),
          React.createElement(FilterSidePanel.CategoryItem, {
            count: 3,
            icon: this.getStars(1),
            checked: activeFilters.rating1,
            onChange: function onChange(e) {
              return _this2.onFilterChange('rating1', e.target.checked);
            }
          })
        )
      );
    }
  }]);

  return MockFilterSidePanelExample;
}(React.Component);

MockFilterSidePanelExample.propTypes = {
  maxShowCount: PropTypes.number,
  leeway: PropTypes.number
};
MockFilterSidePanelExample.defaultProps = {
  maxShowCount: 5,
  leeway: 2
};

export { MockFilterSidePanelExample };

export var MockFilterSidePanelExampleSource = '\nimport React from \'react\';\nimport PropTypes from \'prop-types\';\nimport FilterSidePanel from \'../FilterSidePanel\';\nimport { Icon, FormControl } from \'patternfly-react\';\n\nclass MockFilterSidePanelExample extends React.Component {\n  state = {\n    activeFilters: {\n      typeSUV: false,\n      typeSedan: false,\n      typePickup: false,\n      typeSports: false,\n      makeChevy: false,\n      makeFord: false,\n      makeDodge: false,\n      makeVolkswagen: false,\n      makeHyundai: false,\n      makeHonda: false,\n      makeToyota: false,\n      makeMercedes: false,\n      makeBMW: false,\n      makeInfiniti: false,\n      makeLexus: false,\n      makeAcura: false,\n      paymentPaypal: false,\n      paymentDiscover: false,\n      paymentVisa: false,\n      paymentMastercard: false,\n      paymentAmex: false,\n      paymentDinersClub: false,\n      mileage50: false,\n      mileage40: false,\n      mileage30: false,\n      mileage20: false,\n      mileage10: false,\n      rating5: false,\n      rating4: false,\n      rating3: false,\n      rating2: false,\n      rating1: false\n    },\n    showAllCategories: {\n      type: false,\n      make: false,\n      paymentOptions: false,\n      mileage: false,\n      rating: false\n    }\n  };\n\n  onShowAllToggle = id => {\n    const showAllCategories = { ...this.state.showAllCategories };\n    showAllCategories[id] = !showAllCategories[id];\n    this.setState({ showAllCategories });\n  };\n\n  onFilterChange = (id, value) => {\n    const activeFilters = { ...this.state.activeFilters };\n    activeFilters[id] = value;\n    this.setState({ activeFilters });\n  };\n\n  getStars = count => {\n    const stars = [];\n\n    for (let i = 0; i < count; i++) {\n      stars.push(<Icon key={`star_${i}`} type="fa" name="star" />);\n    }\n\n    return <span>{stars}</span>;\n  };\n\n  render() {\n    const { activeFilters, showAllCategories } = this.state;\n    const { maxShowCount, leeway } = this.props;\n\n    return (\n      <FilterSidePanel id="filter-panel">\n        <FilterSidePanel.Category>\n          <FormControl type="text" placeholder="Filter by name" bsClass="form-control" />\n        </FilterSidePanel.Category>\n        <FilterSidePanel.Category\n          title="Type"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.type}\n          onShowAllToggle={() => this.onShowAllToggle(\'type\')}\n        >\n          <FilterSidePanel.CategoryItem\n            count={23}\n            checked={activeFilters.typeSUV}\n            onChange={e => this.onFilterChange(\'typeSUV\', e.target.checked)}\n          >\n            SUV\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={11}\n            checked={activeFilters.typeSedan}\n            onChange={e => this.onFilterChange(\'typeSedan\', e.target.checked)}\n          >\n            Sedan\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={5}\n            checked={activeFilters.typePickup}\n            onChange={e => this.onFilterChange(\'typePickup\', e.target.checked)}\n          >\n            Pickup Truck\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={3}\n            checked={activeFilters.typeSports}\n            onChange={e => this.onFilterChange(\'typeSports\', e.target.checked)}\n          >\n            Sports Car\n          </FilterSidePanel.CategoryItem>\n        </FilterSidePanel.Category>\n        <FilterSidePanel.Category\n          title="Manufacturer"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.manufacturer}\n          onShowAllToggle={() => this.onShowAllToggle(\'manufacturer\')}\n        >\n          <FilterSidePanel.CategoryItem\n            count={6}\n            checked={activeFilters.makeChevy}\n            onChange={e => this.onFilterChange(\'makeChevy\', e.target.checked)}\n          >\n            Chevrolet\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={5}\n            checked={activeFilters.makeFord}\n            onChange={e => this.onFilterChange(\'makeFord\', e.target.checked)}\n          >\n            Ford\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={7}\n            checked={activeFilters.makeDodge}\n            onChange={e => this.onFilterChange(\'makeDodge\', e.target.checked)}\n          >\n            Dodge\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={4}\n            checked={activeFilters.makeVolkswagen}\n            onChange={e => this.onFilterChange(\'makeVolkswagen\', e.target.checked)}\n          >\n            Volkswagen\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={2}\n            checked={activeFilters.makeHyundai}\n            onChange={e => this.onFilterChange(\'makeHyundai\', e.target.checked)}\n          >\n            Hyundai\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={3}\n            checked={activeFilters.makeHonda}\n            onChange={e => this.onFilterChange(\'makeHonda\', e.target.checked)}\n          >\n            Honda\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={6}\n            checked={activeFilters.makeToyota}\n            onChange={e => this.onFilterChange(\'makeToyota\', e.target.checked)}\n          >\n            Toyota\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={2}\n            checked={activeFilters.makeMercedes}\n            onChange={e => this.onFilterChange(\'makeMercedes\', e.target.checked)}\n          >\n            Mercedes\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={2}\n            checked={activeFilters.makeBMW}\n            onChange={e => this.onFilterChange(\'makeBMW\', e.target.checked)}\n          >\n            BMW\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={1}\n            checked={activeFilters.makeInfiniti}\n            onChange={e => this.onFilterChange(\'makeInfiniti\', e.target.checked)}\n          >\n            Infiniti\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={1}\n            checked={activeFilters.makeLexus}\n            onChange={e => this.onFilterChange(\'makeLexus\', e.target.checked)}\n          >\n            Lexus\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={0}\n            checked={activeFilters.makeAcura}\n            onChange={e => this.onFilterChange(\'makeAcura\', e.target.checked)}\n          >\n            Acura\n          </FilterSidePanel.CategoryItem>\n        </FilterSidePanel.Category>\n        <FilterSidePanel.Category\n          title="Payment Options"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.payment}\n          onShowAllToggle={() => this.onShowAllToggle(\'payment\')}\n        >\n          <FilterSidePanel.CategoryItem\n            icon={<Icon type="fa" name="cc-paypal" />}\n            checked={activeFilters.paymentPaypal}\n            onChange={e => this.onFilterChange(\'paymentPaypal\', e.target.checked)}\n          >\n            PayPal\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            icon={<Icon type="fa" name="cc-discover" />}\n            checked={activeFilters.paymentDiscover}\n            onChange={e => this.onFilterChange(\'paymentDiscover\', e.target.checked)}\n          >\n            Discover\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            icon={<Icon type="fa" name="cc-visa" />}\n            checked={activeFilters.paymentVisa}\n            onChange={e => this.onFilterChange(\'paymentVisa\', e.target.checked)}\n          >\n            Visa\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            icon={<Icon type="fa" name="cc-mastercard" />}\n            checked={activeFilters.paymentMastercard}\n            onChange={e => this.onFilterChange(\'paymentMastercard\', e.target.checked)}\n          >\n            Mastercard\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            icon={<Icon type="fa" name="cc-amex" />}\n            checked={activeFilters.paymentAmex}\n            onChange={e => this.onFilterChange(\'paymentAmex\', e.target.checked)}\n          >\n            American Express\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            icon={<Icon type="fa" name="cc-diners-club" />}\n            checked={activeFilters.paymentDinersClub}\n            onChange={e => this.onFilterChange(\'paymentDinersClub\', e.target.checked)}\n          >\n            {`Diner\'s Club`}\n          </FilterSidePanel.CategoryItem>\n        </FilterSidePanel.Category>\n        <FilterSidePanel.Category\n          title="Fuel Mileage"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.mileage}\n          onShowAllToggle={() => this.onShowAllToggle(\'mileage\')}\n        >\n          <FilterSidePanel.CategoryItem\n            count={3}\n            checked={activeFilters.mileage50}\n            onChange={e => this.onFilterChange(\'mileage50\', e.target.checked)}\n          >\n            50+\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={7}\n            checked={activeFilters.mileage40}\n            onChange={e => this.onFilterChange(\'mileage40\', e.target.checked)}\n          >\n            40-50\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={9}\n            checked={activeFilters.mileage30}\n            onChange={e => this.onFilterChange(\'mileage30\', e.target.checked)}\n          >\n            30-40\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={12}\n            checked={activeFilters.mileage20}\n            onChange={e => this.onFilterChange(\'mileage20\', e.target.checked)}\n          >\n            20-30\n          </FilterSidePanel.CategoryItem>\n          <FilterSidePanel.CategoryItem\n            count={8}\n            checked={activeFilters.mileage10}\n            onChange={e => this.onFilterChange(\'mileage10\', e.target.checked)}\n          >{`< 20`}</FilterSidePanel.CategoryItem>\n        </FilterSidePanel.Category>\n        <FilterSidePanel.Category\n          title="Rating"\n          maxShowCount={maxShowCount}\n          leeway={leeway}\n          showAll={showAllCategories.rating}\n          onShowAllToggle={() => this.onShowAllToggle(\'rating\')}\n        >\n          <FilterSidePanel.CategoryItem\n            count={2}\n            icon={this.getStars(5)}\n            checked={activeFilters.rating5}\n            onChange={e => this.onFilterChange(\'rating5\', e.target.checked)}\n          />\n          <FilterSidePanel.CategoryItem\n            count={12}\n            icon={this.getStars(4)}\n            checked={activeFilters.rating4}\n            onChange={e => this.onFilterChange(\'rating4\', e.target.checked)}\n          />\n          <FilterSidePanel.CategoryItem\n            count={8}\n            icon={this.getStars(3)}\n            checked={activeFilters.rating3}\n            onChange={e => this.onFilterChange(\'rating3\', e.target.checked)}\n          />\n          <FilterSidePanel.CategoryItem\n            count={5}\n            icon={this.getStars(2)}\n            checked={activeFilters.rating2}\n            onChange={e => this.onFilterChange(\'rating2\', e.target.checked)}\n          />\n          <FilterSidePanel.CategoryItem\n            count={3}\n            icon={this.getStars(1)}\n            checked={activeFilters.rating1}\n            onChange={e => this.onFilterChange(\'rating1\', e.target.checked)}\n          />\n        </FilterSidePanel.Category>\n      </FilterSidePanel>\n    );\n  }\n}\nMockFilterSidePanelExample.propTypes = {\n  maxShowCount: PropTypes.number,\n  leeway: PropTypes.number\n};\nMockFilterSidePanelExample.defaultProps = {\n  maxShowCount: 5,\n  leeway: 2\n};\n\nexport { MockFilterSidePanelExample };\n';