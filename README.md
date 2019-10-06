# Patternfly-Chat

Patternfly-Chat is a real time chat application that allows communication both group and individual communication. Its' micro services architecture features three principle resources. There is an authentication system which leverages Keycloak and which makes management of client applications, users, and assignment of permissions and roles extremely simple. The second resource that the application relies heavily on is a Cache. The cache provides functionality for the expiration of sessions and picture of who is using the app at what time. The code is divided so far into a front end into two small services. A front end that is written in React, and a Node service that interacts with the cache. This app was originally being written for a blog post so the idea is to keep things as simple as possible.


# Resources

All of the resources used in this app are run in docker containers. Everything is accessible locally and extremely simple and fast to spin up. In the future i would like to write a version of the Cache Service in TypeScript and a mobile version in React Native but for now the focus is on completing the app and making it **progressive!**

## Cache Service

We are using a Redis container for the Cache. To pull and run the container locally you will use:
> docker run -d -p 6379:6379 redis
> docker start redis

The second command is not critical but is there just incase of errors.

CACHE API
The api for the cache has three endpoints. One for storing a session in the cache with an expiration date, another for retrieving a single key from the cache, one for deleting a key from the cache, and one for pulling all of the keys from the cache. Users are stores into the cache in a composite key so we can still have the functionality to expire each individual session, but all iterate over the whole group.

##### Store keys
> curl http://localhost:3332/store/10000/myKey\?value=valueOfKey
> curl http://localhost:3332/store/10000/birthMonth\?value=July

##### Retrieve keys
 > curl http://localhost:3332/name/myKey
 > curl http://localhost:3332/name/birthMonth

##### Delete Keys
> curl http://localhost:3332/delete/myKey
> curl http://localhost:3332/delete/birthMonth

##### Fetch All Keys
> curl http://localhost:3332/all


## Auth Service

We are using a Redis container to start and run our keycloak instance to manage our identity pools and authentication. To pull and run the container locally you just have to specify a default user, database, and the port.

> docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e DB_VENDOR=H2 jboss/keycloak

Next, go to http://localhost:8080/auth/admin to start configuring your keycloak instance.

Hover over the left panel and you will notice a button appears that says, "Create Realm", click the button to create a realm, give it a name, then click the top login tab in the top of the same page you are on. Click Allow User Registration so that it has an ON state.

Next configure the clients, which are our front and backend services. Click on the "Clients" left panel. Create two clients, one is frontend, make sure the Valid Redirect URIs are consistent which the URIs of the apps. Also make sure the access type is set to Public. The last thing you will need to do is click on the installation tab in the top right and then select Keycloak IODC JSON from the selector that is labeled Format Options. Copy that file for each client service into the public directory.


# Running the Project
To run the project run npm install and npm start on both the Cache service and the React app. Make sure you have the correct URLs and you should be well on your way to developing.
