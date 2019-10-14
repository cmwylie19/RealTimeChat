FROM node

# set working directory
COPY . .


# ENV PATH /
ENV PORT 1337

# install and cache app dependencies


EXPOSE 1337
RUN npm install
# COPY . .
# start app
CMD ["node", "index.js"]
