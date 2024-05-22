FROM node:20

WORKDIR /usr/src/app

RUN npm install

COPY . .

ENV PORT=3000

ENV MODEL_URL=https://storage.googleapis.com/submissionmlgc-yudha/submissions-model/model.json

CMD ["node", "start"]