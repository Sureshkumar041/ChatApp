Node Js Setup Command

Naal - 17-04-2025 📅

Create Project
npm init

Install essential packages
npm install express
npm install --save-dev nodemon
npm install dotenv
npm install cors

configured env for dev & prod

DB - mongodb
npm install mongodb
npm install mongoose - 💬 For DB connection

Setup Api - Route - Controller - Service - Model

Naal - 18-04-2025 📅

File Upload Setup - Install essential packages
npm i multer

💬 Multer - Multer is a node.js middleware for handling multipart/form-data , which is primarily used for uploading files.

Creating middleware for file upload

Naal - 19-04-2025 📅

💬 Helmet - Helmet is a popular middleware for Node. js applications that helps improve the security of your web application by setting various HTTP headers

npm i helmet

Swagger Setup

💬 Swagger - Swagger's primary purpose is to provide a standardized way to describe, document, and design RESTful APIs, making them easier to understand, build, and test.

npm install swagger-ui-express swagger-jsdoc

💬 swagger-ui-express & swagger-jsdoc - swagger-jsdoc focuses on generating the documentation from your code comments, swagger-ui-express is used to display that documentation in a user-friendly interface


Git Repository

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Sureshkumar041/ChatApp.git
git push -u origin main