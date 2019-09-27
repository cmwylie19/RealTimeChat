import React, { useState } from 'react'
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelectionOption,
  FormSelect,
  Checkbox,
  ActionGroup,
  Button,
  Radio
} from '@patternfly/react-core';

export default function FormLogin(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleCancelClick = value1 => {
    setEmail("");
    setPassword("");
  };

  return (
    <Form>
      <FormGroup
        label="Email"
        isRequired
        fieldId="email"
      >
        <TextInput
          isRequired
          type="email"
          id="email"
          name="simple-form-email"
          value={email}
          onChange={e=>setEmail(e)}
        />


      </FormGroup>
      <FormGroup label="Password" isRequired fieldId="simple-form-email">
        <TextInput
          isRequired
          type="password"
          id="simple-form-password"
          name="simple-form-password"
          value={password}
          onChange={e=>setPassword(e)}
        />
      </FormGroup>

      <FormGroup fieldId="checkbox1">
        <Checkbox label="Remember me" id="checkbox1" name="checkbox1" aria-label="Update via email" />
      </FormGroup>
      <ActionGroup>
        <Button
          isBlock
          variant="primary"
          onClick={props.onLoginClick}
         // onClick={() => props.history.push('/dashboard')}
        >Login</Button>
        <Button 
          isBlock
          variant="secondary"
          onClick={handleCancelClick}
        >Cancel</Button>
      </ActionGroup>
    </Form>
  );

}
