FROM node:8.6.0

# Run a command for creating the following path on container
RUN mkdir -p /usr/frontend

# Sets the work directory of our app to be the new path
WORKDIR /usr/frontend

# Copy all files from current directory to the new path in container
COPY . /usr/frontend

# Delete the Cache folder from frontend container
RUN rm -rf Cache

# Run the command for installing our node dependencies
RUN npm install

# Define the command that will execute when the container start
CMD npm start