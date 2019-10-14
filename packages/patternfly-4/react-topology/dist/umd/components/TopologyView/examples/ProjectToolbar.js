(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactCore);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ProjectToolbar = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  const projects = [{
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
  const applications = [{
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

  class ProjectToolbar extends _react2.default.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        selectedProject: projects[4],
        selectedApplication: applications[4],
        projectDropDownOpen: false,
        applicationDropDownOpen: false
      });

      _defineProperty(this, "onProjectDropDownToggle", isOpen => {
        this.setState({
          projectDropDownOpen: isOpen
        });
      });

      _defineProperty(this, "onProjectSelect", (e, project) => {
        e.preventDefault();
        this.setState({
          selectedProject: project,
          projectDropDownOpen: false
        });
      });

      _defineProperty(this, "onApplicationDropDownToggle", isOpen => {
        this.setState({
          applicationDropDownOpen: isOpen
        });
      });

      _defineProperty(this, "onApplicationSelect", (e, application) => {
        e.preventDefault();
        this.setState({
          selectedApplication: application,
          applicationDropDownOpen: false
        });
      });

      _defineProperty(this, "renderProjectDropdown", () => {
        const {
          projectDropDownOpen,
          selectedProject
        } = this.state;
        return _react2.default.createElement(_reactCore.Stack, null, _react2.default.createElement(_reactCore.StackItem, null, _react2.default.createElement("label", null, "Project")), _react2.default.createElement(_reactCore.StackItem, null, _react2.default.createElement(_reactCore.Dropdown, {
          onToggle: this.onProjectDropDownToggle,
          position: _reactCore.DropdownPosition.right,
          toggle: _react2.default.createElement(_reactCore.DropdownToggle, {
            onToggle: this.onProjectDropDownToggle
          }, selectedProject.name),
          isOpen: projectDropDownOpen,
          dropdownItems: projects.map(project => _react2.default.createElement(_reactCore.DropdownItem, {
            key: project.id,
            onClick: e => this.onProjectSelect(e, project)
          }, project.name))
        })));
      });

      _defineProperty(this, "renderApplicationDropdown", () => {
        const {
          applicationDropDownOpen,
          selectedApplication
        } = this.state;
        return _react2.default.createElement(_reactCore.Stack, null, _react2.default.createElement(_reactCore.StackItem, null, _react2.default.createElement("label", null, "Application")), _react2.default.createElement(_reactCore.StackItem, null, _react2.default.createElement(_reactCore.Dropdown, {
          onToggle: this.onApplicationDropDownToggle,
          position: _reactCore.DropdownPosition.right,
          toggle: _react2.default.createElement(_reactCore.DropdownToggle, {
            onToggle: this.onApplicationDropDownToggle
          }, selectedApplication.name),
          isOpen: applicationDropDownOpen,
          dropdownItems: applications.map(application => _react2.default.createElement(_reactCore.DropdownItem, {
            key: application.id,
            onClick: e => this.onApplicationSelect(e, application)
          }, application.name))
        })));
      });
    }

    render() {
      return _react2.default.createElement(_reactCore.Toolbar, {
        className: "project-toolbar pf-u-mx-md pf-u-mt-md"
      }, _react2.default.createElement(_reactCore.ToolbarGroup, null, _react2.default.createElement(_reactCore.ToolbarItem, {
        className: "pf-u-mr-xl"
      }, this.renderProjectDropdown()), _react2.default.createElement(_reactCore.ToolbarItem, {
        className: "pf-u-mr-md"
      }, this.renderApplicationDropdown())));
    }

  }

  exports.ProjectToolbar = ProjectToolbar;
});
//# sourceMappingURL=ProjectToolbar.js.map