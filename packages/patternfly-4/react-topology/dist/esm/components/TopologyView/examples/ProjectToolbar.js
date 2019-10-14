function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Dropdown, DropdownPosition, DropdownToggle, DropdownItem, Stack, StackItem, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
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
export class ProjectToolbar extends React.Component {
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
      return React.createElement(Stack, null, React.createElement(StackItem, null, React.createElement("label", null, "Project")), React.createElement(StackItem, null, React.createElement(Dropdown, {
        onToggle: this.onProjectDropDownToggle,
        position: DropdownPosition.right,
        toggle: React.createElement(DropdownToggle, {
          onToggle: this.onProjectDropDownToggle
        }, selectedProject.name),
        isOpen: projectDropDownOpen,
        dropdownItems: projects.map(project => React.createElement(DropdownItem, {
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
      return React.createElement(Stack, null, React.createElement(StackItem, null, React.createElement("label", null, "Application")), React.createElement(StackItem, null, React.createElement(Dropdown, {
        onToggle: this.onApplicationDropDownToggle,
        position: DropdownPosition.right,
        toggle: React.createElement(DropdownToggle, {
          onToggle: this.onApplicationDropDownToggle
        }, selectedApplication.name),
        isOpen: applicationDropDownOpen,
        dropdownItems: applications.map(application => React.createElement(DropdownItem, {
          key: application.id,
          onClick: e => this.onApplicationSelect(e, application)
        }, application.name))
      })));
    });
  }

  render() {
    return React.createElement(Toolbar, {
      className: "project-toolbar pf-u-mx-md pf-u-mt-md"
    }, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, {
      className: "pf-u-mr-xl"
    }, this.renderProjectDropdown()), React.createElement(ToolbarItem, {
      className: "pf-u-mr-md"
    }, this.renderApplicationDropdown())));
  }

}
//# sourceMappingURL=ProjectToolbar.js.map