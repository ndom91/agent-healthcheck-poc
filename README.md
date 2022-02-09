# Healthcheck Notes

1. Needs to be outbound, i.e. Agent -> Checkly Backend
2. Should have some sort of process monitor (Docker itself? Separate PM2?)
3. Otherwise, a simple axios request every X seconds should do..

With Docker has a built-in "HEALTHCHECK" function in their Dockerfile definitions

i.e.

```docker
FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \
    CMD node healthcheck.js

CMD ["node","real-app.js"]
```

### Links

- [webhook.site playground](https://webhook.site/#!/35d53c8c-5215-4abc-85bb-2eca7a0eb996/5209326d-313e-4d99-b4fb-2d40e07b798f/1)
- Docker [HEALTHCHECK](https://scoutapm.com/blog/how-to-use-docker-healthcheck) in JavaScript
