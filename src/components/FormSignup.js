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

export default function FormSignup(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [first, setFirst] =useState("")
    const [last, setLast] = useState("")

  const handleCancelClick = value1 => {
    setEmail("");
    setPassword("");
  };

  return (
    <Form>
       <FormGroup
        label="First Name"
        isRequired
        fieldId="first"
      >
        <TextInput
          isRequired
          type="text"
          id="first"
          name="first"
          value={first}
          onChange={e=>setFirst(e)}
        />
      </FormGroup>
      <FormGroup
        label="Last Name"
        isRequired
        fieldId="last"
      >
        <TextInput
          isRequired
          type="text"
          id="last"
          name="last"
          value={last}
          onChange={e=>setLast(e)}
        />
      </FormGroup>
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
          onChange={event=>setPassword(event)}
        />
      </FormGroup>
      <FormGroup fieldId="checkbox1">
        <Checkbox label="Remember me" id="checkbox1" name="checkbox1" aria-label="Update via email" />
      </FormGroup>
      <ActionGroup>
        <Button
          isBlock
          variant="primary"
          onClick={props.onSignupClick}
        //  onClick={() => props.history.push('/dashboard')}
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
