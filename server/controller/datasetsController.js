import express from "express";
import Datasets from "../data/datasets.js"

const datasetsApi = express.Router();

async function findDataset(req, res, next){
    let dataset;
    console.log(req.params.id);

    try {
        dataset = await Datasets.find(req.params.id)
        if (!dataset) {
            return res.status(404).json({ message: "Cannot find dataset" });
        }
        
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

    res.dataset = dataset;
    next();
}


datasetsApi.get("/api", (req, res) => {
    res.send("DatasetsApi successfully reached.");
});

datasetsApi.get("/search", findDataset, (req, res) => {
    try {
        res.status(200).json(res.dataset);
    } catch (e) {
        console.log(e);
        res.status(404).end();
    }
});

export default datasetsApi;