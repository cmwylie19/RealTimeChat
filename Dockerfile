# stage: 1
FROM node:12.11-slim  as react-build
WORKDIR /opt/app
COPY . ./
RUN npm install && npm run build

# stage: 2 — the production environment
FROM nginx:alpine
COPY --from=react-build /opt/app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]