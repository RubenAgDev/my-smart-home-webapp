# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10 AS build-stage
WORKDIR /app
COPY package*.json /app/
# Using ci instead of install as it were a CI tool
RUN npm ci
COPY ./ /app/

# Just for fun, using a different env var, because of create-react-app setting the var here
ENV REACT_APP_RUNNING_FROM=docker_multi-stage_builds
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /var/www

# Copy the nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
