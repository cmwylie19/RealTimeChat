import React, { useImperativeHandle, useRef, Fragment,useState, useEffect } from 'react';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
} from '@patternfly/react-core';
import { setCookie } from '../libs';

export default function MessageInput(props) {
  const [content, setContent] = useState("")
  const inputEl = useRef(null);
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
          onChange={e=>setContent(e)}
          name="textarea2" id="textarea2" aria-label="textarea with button" />
        <Button 
        onClick={()=>{
          alert(content)
          props.sendDM(props.CurrentChat,props.email, content);
          props.sendMsg({from:props.username, to:props.CurrentChat,content:content});
          setContent("");
          
        }}
          id="textAreaButton2" variant={ButtonVariant.control}>
          Send
          </Button>
      </InputGroup>
    </Fragment>
  );
}