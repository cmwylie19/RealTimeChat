import React, { useEffect, useRef, Fragment, useState } from 'react';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
} from '@patternfly/react-core';
let charCode;
export default function MessageInput(props) {
  const inpRef = useRef();
  const [content, setContent] = useState("");
  const { CurrentChat, username, sendMessage } = props;
  let prevKey = usePrevious();

  const test = useRef(content);
  useEffect(() => {

    test.current.focus();
    return () => setContent(test.current.value);
  }, { content })

  function usePrevious() {
    const ref = useRef();
    useEffect(() => {
      ref.current = content[content[content.length - 1]];
    });
    return ref.current;
  }

  const submitMessage = () => {
    setContent(test.current.value)
    sendMessage(CurrentChat, username, content);
    setContent("");
  }


  return (
    <Fragment>
      <InputGroup>
        <input
          type="text"
          ref={test}
          onKeyUp={e => e.which == 13 ? submitMessage() : test.current.focus()}
          value={content}
          onChange={event => event.which === 13 ? submitMessage() : setContent(test.current.value)} 
        />
        <Button
          onClick={() => submitMessage()}
          id="textAreaButton2" variant={ButtonVariant.control}>
          Send
          </Button>

      </InputGroup>
    </Fragment>
  );
}
