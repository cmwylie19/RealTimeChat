This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
> curl -X GET http://localhost:8080/auth/realms/Chat/protocol/openid-connect/logout


>
curl -X GET \
>   http://localhost:8080/auth/realms/Chat/.well-known/uma2-configuration
{"issuer":"http://localhost:8080/auth/realms/Chat","authorization_endpoint":"http://localhost:8080/auth/realms/Chat/protocol/openid-connect/auth","token_endpoint":"http://localhost:8080/auth/realms/Chat/protocol/openid-connect/token","token_introspection_endpoint":"http://localhost:8080/auth/realms/Chat/protocol/openid-connect/token/introspect","end_session_endpoint":"http://localhost:8080/auth/realms/Chat/protocol/openid-connect/logout","jwks_uri":"http://localhost:8080/auth/realms/Chat/protocol/openid-connect/certs","grant_types_supported":["authorization_code","implicit","refresh_token","password","client_credentials"],"response_types_supported":["code","none","id_token","token","id_token token","code id_token","code token","code id_token token"],"response_modes_supported":["query","fragment","form_post"],"registration_endpoint":"http://localhost:8080/auth/realms/Chat/clients-registrations/openid-connect","token_endpoint_auth_methods_supported":["private_key_jwt","client_secret_basic","client_secret_post","client_secret_jwt"],"token_endpoint_auth_signing_alg_values_supported":["RS256"],"scopes_supported":["openid","address","email","microprofile-jwt","offline_access","phone","profile","roles","web-origins"],"resource_registration_endpoint":"http://localhost:8080/auth/realms/Chat/authz/protection/resource_set","permission_endpoint":"http://localhost:8080/auth/realms/Chat/authz/protection/permission","policy_endpoint":"http://localhost:8080/auth/realms/Chat/authz/protection/uma-policy","introspection_endpoint":"http://localhost:8080/auth/realms/Chat/protocol/openid-connect/token/introspect"}casewylie@MacBook-Pro patternfly-react 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
