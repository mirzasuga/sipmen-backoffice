FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build


FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]
# FROM node:lts-alpine as build-stage
# WORKDIR /app

# # production stage
# # FROM nginx:stable-alpine as production-stage
# # COPY --from=build-stage /app/dist /usr/share/nginx/html

# COPY package*.json ./
# RUN npm install --silent
# COPY . .
# RUN npm run build

# EXPOSE 80
# # CMD ["nginx", "-g", "daemon off;"]
# CMD ["npm", "start"]
