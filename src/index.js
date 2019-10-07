import React from 'react';
import ReactDOM from 'react-dom';
import '@patternfly/patternfly/patternfly.css';
import * as serviceWorker from './serviceWorker';
import AppContainer from './containers/AppContainer';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

serviceWorker.unregister();
