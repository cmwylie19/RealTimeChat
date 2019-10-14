"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectToolbar = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCore = require("@patternfly/react-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var projects = [{
  id: 1,
  name: 'Project 1'
}, {
  id: 2,
  name: 'Project 2'
}, {
  id: 3,
  name: 'Project 3'
}, {
  id: 4,
  name: 'Project 4'
}, {
  id: 'all',
  name: 'All'
}];
var applications = [{
  id: 1,
  name: 'Application 1'
}, {
  id: 2,
  name: 'Application 2'
}, {
  id: 3,
  name: 'Application 3'
}, {
  id: 4,
  name: 'Application 4'
}, {
  id: 'all',
  name: 'All'
}];

var ProjectToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProjectToolbar, _React$Component);

  function ProjectToolbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProjectToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProjectToolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedProject: projects[4],
      selectedApplication: applications[4],
      projectDropDownOpen: false,
      applicationDropDownOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onProjectDropDownToggle", function (isOpen) {
      _this.setState({
        projectDropDownOpen: isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onProjectSelect", function (e, project) {
      e.preventDefault();

      _this.setState({
        selectedProject: project,
        projectDropDownOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onApplicationDropDownToggle", function (isOpen) {
      _this.setState({
        applicationDropDownOpen: isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onApplicationSelect", function (e, application) {
      e.preventDefault();

      _this.setState({
        selectedApplication: application,
        applicationDropDownOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderProjectDropdown", function () {
      var _this$state = _this.state,
          projectDropDownOpen = _this$state.projectDropDownOpen,
          selectedProject = _this$state.selectedProject;
      return _react["default"].createElement(_reactCore.Stack, null, _react["default"].createElement(_reactCore.StackItem, null, _react["default"].createElement("label", null, "Project")), _react["default"].createElement(_reactCore.StackItem, null, _react["default"].createElement(_reactCore.Dropdown, {
        onToggle: _this.onProjectDropDownToggle,
        position: _reactCore.DropdownPosition.right,
        toggle: _react["default"].createElement(_reactCore.DropdownToggle, {
          onToggle: _this.onProjectDropDownToggle
        }, selectedProject.name),
        isOpen: projectDropDownOpen,
        dropdownItems: projects.map(function (project) {
          return _react["default"].createElement(_reactCore.DropdownItem, {
            key: project.id,
            onClick: function onClick(e) {
              return _this.onProjectSelect(e, project);
            }
          }, project.name);
        })
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderApplicationDropdown", function () {
      var _this$state2 = _this.state,
          applicationDropDownOpen = _this$state2.applicationDropDownOpen,
          selectedApplication = _this$state2.selectedApplication;
      return _react["default"].createElement(_reactCore.Stack, null, _react["default"].createElement(_reactCore.StackItem, null, _react["default"].createElement("label", null, "Application")), _react["default"].createElement(_reactCore.StackItem, null, _react["default"].createElement(_reactCore.Dropdown, {
        onToggle: _this.onApplicationDropDownToggle,
        position: _reactCore.DropdownPosition.right,
        toggle: _react["default"].createElement(_reactCore.DropdownToggle, {
          onToggle: _this.onApplicationDropDownToggle
        }, selectedApplication.name),
        isOpen: applicationDropDownOpen,
        dropdownItems: applications.map(function (application) {
          return _react["default"].createElement(_reactCore.DropdownItem, {
            key: application.id,
            onClick: function onClick(e) {
              return _this.onApplicationSelect(e, application);
            }
          }, application.name);
        })
      })));
    });

    return _this;
  }

  _createClass(ProjectToolbar, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactCore.Toolbar, {
        className: "project-toolbar pf-u-mx-md pf-u-mt-md"
      }, _react["default"].createElement(_reactCore.ToolbarGroup, null, _react["default"].createElement(_reactCore.ToolbarItem, {
        className: "pf-u-mr-xl"
      }, this.renderProjectDropdown()), _react["default"].createElement(_reactCore.ToolbarItem, {
        className: "pf-u-mr-md"
      }, this.renderApplicationDropdown())));
    }
  }]);

  return ProjectToolbar;
}(_react["default"].Component);

exports.ProjectToolbar = ProjectToolbar;
//# sourceMappingURL=ProjectToolbar.js.map