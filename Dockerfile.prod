# Stage 0 - Build frontend
FROM node:19-alpine as build
WORKDIR /app
COPY package.json .
# ENV REACT_APP_API_ADRESS=http://tennis-bot:2271
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Run nginx
FROM nginx:latest
COPY --from=build /app/dist/* /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
