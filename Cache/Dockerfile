FROM node:8.6.0

# Run a command for creating the following path on container
RUN mkdir -p /usr/cache-service

# Sets the work directory of our app to be the new path
WORKDIR /usr/cache-service

# Copy all files from current directory to the new path in container
COPY . /usr/cache-service

# Run the command for installing our node dependencies
RUN npm install

# Define the command that will execute when the container start
CMD npm start