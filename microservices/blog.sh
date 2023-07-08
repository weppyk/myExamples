#! /usr/bin/bash
# This is guide for create directory structure of blog app
# That is an example based on information from Udemy course named Microservices with Node JS and React
mkdir blog
cd blog
npx create-react-app client
mkdir posts # use another terminal and go to blog directory
cd posts
npm init -y #thats gonna create package.json file
npm install express cors axios nodemon
cd ..
mkdir comments
cd comments
npm init -y
npm install express cors axios nodemon
cd ..
cd client
npm start
