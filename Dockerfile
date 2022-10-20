# Dockerfile

# Tell Docker what base image to use as a starting point.
FROM node:16.15-alpine3.14

# Create a working directory
WORKDIR /opt/app


# Copy source code to working directory
COPY ./ .

# install npm package
RUN npm install

# Expose port 3000
EXPOSE 3000

# Run npm at container launch
CMD [ "npm", "start" ]
