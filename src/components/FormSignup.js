import React, { useState } from 'react'
import {
  Form,
  FormGroup,
  TextInput,
  Checkbox,
  ActionGroup,
  Button,
  Avatar
} from '@patternfly/react-core';
import { Upload } from './'

export default function FormSignup(props) {

  const [remember, setRemember] = useState(false)
  const [pw1, setPW1] = useState('')
  const [pw2, setPW2] = useState('')

  const [pwSame, setPWsame] = useState(pw1 === pw2)

  const NO_MATCH = <label style={{ color: 'red' }}>Passwords dont match</label>
  const MATCH = <label style={{ color: 'green' }}>Passwords match!</label>

  const handleCancelClick = value1 => {
    props.setEmail("");
    props.setPassword("");
  };

  const handleChange = (checked, event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setRemember(value)
    props.setRemember(value)
  };

  return (
    <Form>
      <FormGroup
        label="avatar"
        isRequired
        fieldId="avatar"
        helperText="Please provide avatar">
        <div>
          <Avatar style={{ padding: '0', margin: '0', height: '50px', width: '50px' }} src={props.avatar} alt="avatar"></Avatar>

          <Upload
            avatar={props.avatar}
            setAvatar={props.setAvatar}
          />
        </div>
      </FormGroup>
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
          value={props.first}
          onChange={props.setFirst}
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
          value={props.last}
          onChange={props.setLast}
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
          value={props.email}
          onChange={props.setEmail}
        />
      </FormGroup>

      <FormGroup label="Password" isRequired fieldId="simple-form-email"
        helperText="Please provide a password.">
        <TextInput
          isRequired
          type="password"
          id="simple-form-password"
          name="simple-form-password"
          value={pw1}
          onChange={e => setPW1(e)}
        />
      </FormGroup>
      <FormGroup label="Password" isRequired fieldId="simple-form-email"
        helperText="Please confirm password.">
        <TextInput
          isRequired
          type="password"
          id="simple-form-password"
          name="simple-form-password"
          value={pw2}
          onChange={e => setPW2(e)}
        />
        {pw1 !== '' && (pw1 === pw2 ? MATCH : NO_MATCH)}

      </FormGroup>
      <FormGroup fieldId="checkbox1">
        <Checkbox
          label="Remember me"
          isChecked={remember}
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
