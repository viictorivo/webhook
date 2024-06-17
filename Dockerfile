FROM node:18 as builder

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm build

FROM node:18 as runner

WORKDIR /app

COPY --from=builder /app/node_module ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package-json .

EXPOSE 3000

CMD [ "node", "run", "start:dev" ]