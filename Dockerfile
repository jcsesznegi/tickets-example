# start from base
FROM ubuntu:14.04
MAINTAINER Jason Csesznegi <jcsesznegi@gmail.com>

# install system-wide deps for node
RUN apt-get -yqq update
RUN apt-get -yqq install nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node

# copy our application code
ADD app /opt/app
WORKDIR /opt/app

# fetch app specific deps
RUN npm install
RUN npm run build

# expose port
EXPOSE 8080

# start app
CMD [ "npm", "start" ]
