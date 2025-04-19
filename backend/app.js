require("dotenv").config({
  path: `environment.${process.env.NODE_ENV || "dev"}.env`,
});
const ConnectDB = require("./src/config/db");
const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes/route");
const helmet = require("helmet");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const PORT = process.env.PORT || 3003;
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Text |)ann(_)",
      version: "1.0.0",
      description: "Node Js API Documentation",
    },
    servers: [
      {
        url: `${process.env.PORT}:${PORT}`, // Replace with your server URL
      },
    ],
  },
  apis: [path.join(__dirname, "swagger.js")], // files containing annotations as above
};

console.log("Path: ", path.join(__dirname, "./*.yaml"));
console.log("Path 1: ", path.join(__dirname, "./swaggerDoc/*.js"));

// Initialize swagger-jsdoc
const specs = swaggerJSDoc(options);

app.use("/api", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());
app.use(routes);
// Need to check
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "validator.swagger.io"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        manifestSrc: ["'self'"],
        frameSrc: ["'self'"],
      },
    },
  })
);
// app.use();

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Api routes
app.get("/", (req, res) => {
  res.send("Hi Ra...");
});

// Connect DB
ConnectDB()
  .then((res) => {
    // Applcation Port
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err: ", err);
  });

// Handle mongo DB connection details
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Mongoose connection closed due to app termination");
  process.exit(0);
});
