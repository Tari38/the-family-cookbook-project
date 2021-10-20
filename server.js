const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwsRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint

// Dynamically provide a signing key based on the key in
// the header. Sign keys provided by JWKS endpoint.
const checkJwt = jwt({
  secret: jwsRsa.expressJwtSecret({
    cache: true, // cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers, 5/minute.
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,
  algorithms: ["RS256"] // Must match in Auth0 dashbord.
});

const app = express();

app.get("/public", function (req, res) {
  res.json({
    message: "Hello from public API!"
  });
});

// checkJwt checks we have a valid JWT token before allowing
// user to goto the route.
app.get("/private", checkJwt, function (req, res) {
  res.json({
    message: "Hello from private API!"
  });
});

app.listen(3002);
console.log("API server listening on " + process.env.REACT_APP_API_URL);
