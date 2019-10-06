import React, { useState, useEffect } from 'react';
import {
  LoginMainFooterBandItem,
  LoginPage
} from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import { HatLogo } from '../assets/images'
import { BackgroundImages as images } from '../assets/images/BackgroundImages'
import {SignUpForAccountMessage, LoginAccountMessage, FormSignup,ForgotCreds, HelpLinks, FormLogin, SocialMediaLoginContent} from '../components' 
import { useHistory, useUser } from '../reducers'

export default function LandingContainer() {
    const user = useUser();
    const [ pageState, setPageState ] = useState("Login")
    const [showHelperText, setShowHelperText] = useState(false);
    const [usernameValue, setUsernameValue] = useState("");
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [passwordValue, setPasswordValue] = useState("")
    const [ isValidPassword, setIsValidPassword] = useState("");
    const [ isRememberMeChecked, setRememberMeChecked] = useState(false)
    const [keycloak, setKeycloak] = useState();
    const [authenticated, setAuthenticated] =useState(false);

    const history = useHistory();

    const handleUsernameChange = value => {
      setUsernameValue( value );
    }

    const handlePasswordChange = passwordValue => {
      setPasswordValue(passwordValue)
    }

    const onRememberMeClick = () => {
    setRememberMeChecked(!this.state.isRememberMeChecked);
    }

  const onLoginButtonClick = event => {
    event.preventDefault();
    setIsValidUsername(!!usernameValue);
    setIsValidPassword(!!passwordValue);
    setShowHelperText(!this.state.usernameValue || !this.state.passwordValue);
  }
  
    const helperText = (
      <React.Fragment>
        <ExclamationCircleIcon />
        &nbsp;Invalid login credentials.
      </React.Fragment>
    );

    const signUpForAccountMessage = (
      <LoginMainFooterBandItem>
        Need an account? 
        <a onClick={()=>setPageState("Signup")}>Sign up.</a>
      </LoginMainFooterBandItem>
    );

    return (
      <LoginPage
        footerListVariants="inline"
        brandImgSrc={HatLogo}
        brandImgAlt="Red Hat logo"
        backgroundImgSrc={images}
        backgroundImgAlt="Images"
        footerListItems={HelpLinks}
        textContent="This is placeholder text only. Use this area to place any information or introductory message about your
        application that may be relevant to users."
        loginTitle={ pageState === "Login" ? "Log in to your account" : "Sign up for an account" }
        loginSubtitle="Please use your single sign-on LDAP credentials"
        socialMediaLoginContent={SocialMediaLoginContent}
        signUpForAccountMessage={pageState === "Login" ? <SignUpForAccountMessage handleClick={()=>setPageState("Signup")} /> : <LoginAccountMessage handleClick={e=>setPageState("Login")} /> }
        forgotCredentials={ForgotCreds}
      >
        { pageState === "Login" ? 
        <FormLogin
          email={user.email}
          remember={user.email}
          password={user.password}
          setPassword={ password => user.setPassword(password)}
          setRemember={ (remember) => user.setRemember(remember)}
          setEmail={ email => user.setEmail(email)}
          onLoginClick={()=>history.push("/dashboard")}
        /> : 
        <FormSignup
        first={user.first}
        last={user.last}
        email={user.email}
        remember={user.email}
        avatar={user.avatar}
        setAvatar={avatar=> user.setAvatar(avatar)}
        setRemember={ remember => user.setRemember(remember)}
        setEmail={ email => user.setEmail(email)}
        setFirst={ first => user.setFirst(first)}
        setLast={ last => user.setLast(last)}
        onSignupClick={()=>history.push('/dashboard')}
        /> 
        }
      </LoginPage>
    );
  
}

