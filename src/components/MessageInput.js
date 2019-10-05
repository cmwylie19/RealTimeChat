import React, { useImperativeHandle, useRef, Fragment, useState, useEffect } from 'react';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
} from '@patternfly/react-core';
import { setCookie } from '../libs';




// Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}



export default function MessageInput(props) {
  const [content, setContent] = useState("");
  const enterPress = useKeyPress('enter');
  const inputEl = useRef(null);
  const [enterKey, hitEnterKey] = useState(1);
  const prevEnterKey = usePrevious(enterKey);

  const sendMessage = () => {
    props.sendMessage(props.CurrentChat, props.username, content)
    setContent("");
  }
  const checkValue = e => e.keyCode === '13'? sendMessage() : e
 
    function usePrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    }

  useRef(() => { inputEl.current.focus() })
  useImperativeHandle(inputEl, () => ({
    focus: () => {
      inputEl.current.focus();
    }
  }));
  return (
    <Fragment>
      <InputGroup
      >
        <TextArea
          value={content}
          onKeyDown={e=>e.keyCode === 13 ? sendMessage(): e}
          onChange={e => setContent(checkValue(e))}
          name="textarea2" id="textarea2" aria-label="textarea with button" />
        <Button
          onClick={() => {
            console.log('content ' + content);
            props.sendMessage(props.CurrentChat, props.username, content)
            setContent("");

          }}
          id="textAreaButton2" variant={ButtonVariant.control}>
          Send
          </Button>

      </InputGroup>
    </Fragment>
  );
}
