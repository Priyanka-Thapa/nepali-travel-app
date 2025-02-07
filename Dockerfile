FROM node:18 AS build
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

FROM node:18
WORKDIR /app
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend ./
COPY --from=build /app/build /app/frontend/build

EXPOSE 5000

CMD ["node", "backend/index.js"]
