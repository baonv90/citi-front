FROM node:10.13
WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]