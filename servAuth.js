const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

exports.authJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-c9tibd3j.auth0.com/.well-known/jwks.json`
  }),

  audience: `${process.env.CLIENT_ID}`, //client id
  issuer: "https://dev-c9tibd3j.auth0.com/",
  algorithms: ["RS256"]
});
