FROM node:16 AS builder

WORKDIR /usr/src/app
RUN cd /usr/src/app
COPY package*.json ./

RUN npm install
COPY . ./
RUN npm run build

FROM node:16
COPY package*.json ./
RUN npm install --production
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/index.js ./
CMD ["node", "./index.js"]

