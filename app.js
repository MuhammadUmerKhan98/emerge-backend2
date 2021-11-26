const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
require("dotenv").config();
const schema = require("./schema");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const chalk = require("chalk");

//app
const app = express();

//db
mongoose
  .connect(process.env.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected…");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

//middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Request-Method", "*");
  res.header("Access-Control-Max-Age", "1728000");
  next();
});

app.use(
  "/api/user/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    customFormatErrorFn: (err) => {
      // console.log(err);
      // return ({ message: err.message, statusCode: "400" });
      console.log(err);
      const error = getErrorCode(err.message);
      if (error) {
        return { message: error.message, statusCode: error.statusCode };
      } else {
        return { message: err.message, statusCode: "500" };
      }
    },
  })
);

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log("app is listening on port : ", chalk.yellow(port));
});
