const express = require("express");
const next = require("next");
const axios = require("axios");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const compression = require("compression");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const userJson = require("./user.json");
const servAuth = require("./servAuth");

const User = require("./models/users");

mongoose
  .connect(process.env.MONGO_SERV, { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
    console.log(process.env.MONGO_SERV);
  })
  .catch(err => console.log(err));

const robotsOptions = {
  root: __dirname + "/static/",
  header: {
    "Content-Type": "text/plain;charset=UTF-8"
  }
};

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    server.use(bodyParser.json());

    server.get("/robots.txt", (req, res) => {
      return res.status(200).sendFile("robots.txt", robotsOptions);
    });

    server.get("/api/v1/usersall", (req, res) => {
      User.find({}, (err, allUsers) => {
        if (err) {
          return res.status(422).send(err);
        }
        return res.json(allUsers);
      });
    });

    server.get("/api/v1/users", (req, res) => {
      User.find({ name: "Francis" }, (err, allUsers) => {
        if (err) {
          return res.status(422).send(err);
        }
        return res.json(allUsers);
      });
    });

    server.patch("/api/v1/users/:id", (req, res) => {
      let userId = req.params.id;
      let userData = req.body;

      User.findById(userId, (err, user) => {
        if (err) {
          return res.status(422).send(err);
        }

        user.set(userData);
        user.save((err, modUser) => {
          if (err) {
            return res.status(422).send(err);
          }
          return res.json(modUser);
        });
      });
    });

    server.delete("/api/v1/users/:id", (req, res) => {
      console.log("aa");

      let userId = req.params.id;

      User.deleteOne({ _id: userId }, (err, user) => {
        let userId = req.params.id;

        User.deleteOne({ _id: userId }, (err, user) => {
          if (err) {
            return res.status(422).send(err);
          }
          return res.json(user);
        });
      });
    });

    server.post("/api/v1/users", (req, res) => {
      const userData = req.body;
      const user = new User(userData);

      user.save((err, user) => {
        if (err) {
          return res.status(422).send(err);
        }
        return res.json(user);
      });
    });

    server.get("/api/users", servAuth.authJWT, (req, res) => {
      // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      //   return res.json(response.data);
      // });

      return res.json(userJson);
    });

    server.get("/users/profile/:id", (req, res) => {
      const actualPage = "/users/profile";
      const queryParam = { userId: req.params.id, hello: "hey" };
      app.render(req, res, actualPage, queryParam);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(function(err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res.status(401).send({ error: "Invalid token" });
      }
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> ready on port ${PORT}`);
    });
  })
  .catch(ex => {
    // console.log(ex.stack);
    process.exit(1);
  });
