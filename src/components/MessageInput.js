import React, { useImperativeHandle, useRef, Fragment, useState, useEffect } from 'react';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
} from '@patternfly/react-core';
import { setCookie } from '../libs';



export default function MessageInput(props) {
  const [content, setContent] = useState("");

 

  return (
    <Fragment>
      <InputGroup
      >
        <TextArea
          value={content}
          onChange={e => setContent(e)}
          name="textarea2" id="textarea2" aria-label="textarea with button" />
        <Button
          onClick={() => {
            props.sendMessage(props.CurrentChat, props.username, content);
            setContent("");

          }}
          id="textAreaButton2" variant={ButtonVariant.control}>
          Send
          </Button>

      </InputGroup>
    </Fragment>
  );
}
