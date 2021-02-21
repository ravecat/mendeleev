FROM node:15.8-alpine3.13 as builder
WORKDIR /app
COPY . .
RUN yarn && \
    yarn build

FROM nginx:stable-alpine
WORKDIR /app
COPY --from=builder /app/build /app
COPY .config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
