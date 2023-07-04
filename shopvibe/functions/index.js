const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51NLqcuAKzWxq1E71pn4GEnRQp8hfmfQmzgKDH7kv2ToC7H7EyDa101WcqX2gGJbch50dipG22SOPienp6pukuVyV00tGDAmVER");

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.post("/payments/create", async (request, response) => {
  const { total } = request.body;

  console.log("Payment Request Received !!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "EUR",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
// Example endpoint
// http://127.0.0.1:5001/shopvibe-5b646/us-central1/api
