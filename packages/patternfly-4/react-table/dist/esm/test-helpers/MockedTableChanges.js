import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableContext } from '../components/Table/Table';
import { TableHeader } from '../components/Table';
export const withContext = ({
  context = {},
  contextType = {}
}) => WrappedComponent => {
  class WithContext extends Component {
    getChildContext() {
      return context;
    }

    render() {
      return React.createElement(WrappedComponent, null, this.props.children);
    }

  }

  WithContext.propTypes = {
    children: PropTypes.node
  };
  WithContext.defaultProps = {
    children: null
  };
  WithContext.WrappedComponent = WrappedComponent;
  WithContext.childContextTypes = contextType;
  return WithContext;
};
export const TableProvider = withContext({
  context: {
    columns: [],
    renderers: {
      header: {
        wrapper: 'thead',
        row: 'tr',
        cell: 'th'
      }
    }
  },
  contextType: {
    columns: PropTypes.any,
    renderers: PropTypes.any
  }
})('table');

const MockedTableChanges = ({
  updateFunc,
  columns
}) => React.createElement(TableContext.Provider, {
  value: {
    updateHeaderData: updateFunc
  }
}, React.createElement(TableProvider, null, React.createElement(TableHeader, {
  headerRows: columns
})));

MockedTableChanges.propTypes = {
  updateFunc: PropTypes.func,
  columns: PropTypes.array
};
MockedTableChanges.defaultProps = {
  updateFunc: () => undefined,
  columns: []
};
export default MockedTableChanges;
//# sourceMappingURL=MockedTableChanges.js.map