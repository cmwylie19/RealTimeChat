function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** This Component can be used to wrap a functional component in order to generate a random ID
 * Example of how to use this component
 *
 * const Component = ({id}) => (
 *  <GenerateId>{randomId => (
 *     <div id={id || randomId}>
 *       div with random ID
 *     </div>
 *   )}
 *  </GenerateId>
 *  );
 *
 * Component.propTypes = {
 *  id: PropTypes.string
 * }
 */
import React from 'react';
import PropTypes from 'prop-types';
let currentId = 0;
const propTypes = {
  /** String to prefix the random id with */
  prefix: PropTypes.string,

  /** Component to be rendered with the generated id */
  children: PropTypes.func.isRequired
};

class GenerateId extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "id", `${this.props.prefix}${currentId++}`);
  }

  render() {
    return this.props.children(this.id);
  }

}

_defineProperty(GenerateId, "defaultProps", {
  prefix: 'pf-random-id-'
});

_defineProperty(GenerateId, "propTypes", propTypes);

export default GenerateId;
//# sourceMappingURL=GenerateId.js.map