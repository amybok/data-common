import express from "express";
import datasets from "../data/datasets.js"

const datasetsApi = express.Router();

// Create a route and a handler for GET /datasets
datasetsApi.get('/', (req, res) => {
    // Send the posts array as a JSON response
    res.status(200).json(datasets);
});

// Create a route and a handler for GET /posts/:id
datasetsApi.get('/:id', (req, res) => {
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


export default datasetsApi;