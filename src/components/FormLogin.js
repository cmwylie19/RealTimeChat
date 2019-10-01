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
import { userInfo } from 'os';

export default function FormLogin(props) {
  const [checked, setChecked ] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleCancelClick = value1 => {
    setEmail("");
    setPassword("");
  };

  const handleChange = (checked, event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setChecked(value)
    props.setRemember(value)
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
          value={props.email}
          onChange={props.setEmail}
        />
      </FormGroup>
      <FormGroup label="Password" isRequired fieldId="simple-form-email">
        <TextInput
          isRequired
          type="password"
          id="simple-form-password"
          name="simple-form-password"
          value={props.password}
          onChange={props.setPassword}
        />
      </FormGroup>
      <FormGroup fieldId="checkbox1">
      <Checkbox
          label="Remember me"
          isChecked={checked}
          onChange={handleChange}
          aria-label="remember me"
          id="check-4"
          name="check4"
        />
        
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
