import React from 'react';
import ReactDOM from 'react-dom';
import '@patternfly/patternfly/patternfly.css';
import * as serviceWorker from './serviceWorker';
import AppContainer from './containers/AppContainer';
import config from './config'
// alert(JSON.stringify(config))
process.env.BACKEND_URL=config.backend.URL
ReactDOM.render(<AppContainer config={config} />, document.getElementById('root'));

serviceWorker.unregister();
