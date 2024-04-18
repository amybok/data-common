import express from "express";
import datasets from "../data/datasets.js"
import bodyParser from "body-parser";

const datasetsApi = express.Router();

// create application/json parser
var jsonParser = bodyParser.json()

// Create a route and a handler for GET /datasets
datasetsApi.get('/', (req, res) => {
    // Send the datasets array as a JSON response
    res.status(200).json(datasets);
});

// Create a route and a handler for GET /datasets/:id
// Could write an extra one that use req.query.id to use autocomplete for search
datasetsApi.get('/:id', (req, res) => {
    // Get the id parameter from the request
    const rid = req.params.id;
    

    // Find the dataset with the given id in the datasets array
    const dataset = datasets.find((d) => d.id == rid);
    console.log(dataset)

    // If the dataset exists, send it as a JSON response
    if (dataset) {
        res.json(dataset);
    } else {
        // If the dataset does not exist, send a 404 status code and a message
        res.status(404).send('Dataset not found');
    }
});

// Create a route and a handler for POST /datasets
datasetsApi.post("/", jsonParser, async (req, res) => {
    // To handle the request body, we need to use a middleware called express.json
    // This middleware parses the request body as JSON and adds it to the req object
    datasetsApi.use(express.json());
    
    // Get the data from the request body
    const data = req;

    console.log(req.body)

    // Validate the data
    if (data.name && data.method) {
        const newId = "PDC00" + datasets.length + 1;
        const newDataset = new Dataset(newId, data.name, data.method);

        // Add the new dataset to the datasets array
        datasets.push(newDataset);

        // Send a 201 status code and the new dataset as a JSON response
        res.status(201).json(newDataset);
    }
    else {
        // If the data is invalid, send a 400 status code and a message
        res.status(400).send('Invalid data');
    }
});


export default datasetsApi;



//continue this body parser thing because rn req.body is undefined