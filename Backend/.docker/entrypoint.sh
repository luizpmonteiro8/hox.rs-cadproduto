#!/bin/bash

npm install
npm install prisma -D
npx prisma migrate dev --name init
npm run build
npm run start:dev
