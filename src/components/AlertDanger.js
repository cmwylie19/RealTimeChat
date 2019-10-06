import React, { Fragment } from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

function AlertDanger(props) {
  const [alertOneVisible, setAlertOneVisible] = useState()
}
class AlertDanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alertOneVisible: true, alertTwoVisible: true };
    this.hideAlertOne = () => this.setState({ alertOneVisible: false });
    this.hideAlertTwo = () => this.setState({ alertTwoVisible: false });
  }
  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <Fragment>
        {alertOneVisible && (
          <Alert
            variant="danger"
            title="Danger alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertOne} />}
          >
            Danger alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            variant="danger"
            title="Danger alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <Alert variant="danger" title="Danger alert title" action={<AlertActionLink>Action Button</AlertActionLink>} />
        <Alert variant="danger" title="Danger alert title" />
      </Fragment>
    );
  }
}
