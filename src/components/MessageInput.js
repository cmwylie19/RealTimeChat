import React, { Fragment, useState } from 'react';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
} from '@patternfly/react-core';

export default function MessageInput(props) {
  const [content, setContent] = useState("");
  const { CurrentChat, username, sendMessage } = props;

  const submitMessage = () => {
      sendMessage(CurrentChat, username, content.toString().trim());
    setContent("");
  }

  return (
    <Fragment>
      <InputGroup>
        <TextArea
          value={content}
          onKeyUp={event => event.keyCode === 13 ? submitMessage() : null}
          onChange={event => setContent(event)}
          name="textarea2" id="textarea2" aria-label="textarea with button" />
        <Button
          onClick={() => submitMessage()}
          id="textAreaButton2" variant={ButtonVariant.control}>
          Send
          </Button>
      </InputGroup>
    </Fragment>
  );
}
