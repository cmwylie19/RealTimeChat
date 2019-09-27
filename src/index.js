import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@patternfly/patternfly/patternfly.css';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from './containers/AppContainer';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
