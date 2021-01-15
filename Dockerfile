FROM nginx:1.17.1-alpine
COPY dist /usr/share/nginx/html
EXPOSE 8080