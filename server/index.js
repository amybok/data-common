import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import api from "./routes.js"
import datasets from "./data/datasets.js"

const app = express()

// Create a route and a handler for GET /datasets
app.get('/datasets', (req, res) => {
    // Send the posts array as a JSON response
    res.status(200).json(datasets);
});

// Create a route and a handler for GET /posts/:id
app.get('/datasets/:id', (req, res) => {
    // Get the id parameter from the request
    const id = req.params.id;

    // Find the post with the given id in the posts array
    const dataset = datasets.find((d) => d.id == id);

    // If the post exists, send it as a JSON response
    if (dataset) {
        res.json(dataset);
    } else {
      // If the post does not exist, send a 404 status code and a message
        res.status(404).send('Dataset not found');
    }
});

app.get("/", (req, res) => {
    res.send("Successful response")
});

app.listen(3000, () => {console.log("Server started on port 3000")})