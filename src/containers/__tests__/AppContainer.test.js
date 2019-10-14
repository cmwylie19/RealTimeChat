import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";
import AppContainer from '../AppContainer'
import React from 'react'
let root;
domAct(() => {
  testAct(() => {
    root = create(<AppContainer />);
  });
});
expect(root).toMatchSnapshot();