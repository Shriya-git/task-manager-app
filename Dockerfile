FROM node:18
WORKDIR 4app
COPY . /app
RUN npm install
EXPOSE 8000
CMD ["npm", "run","dev"]
