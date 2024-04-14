import express from "express";

const datasetsApi = express.Router();

async function findDataset(req, res, next){
    let dataset
    try {
        dataset = await Datasets.findByID(req.params.id)
        
        if (!dataset){
            return res.status(404).json({ message: "Cannot find dataset" });
        }
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

    res.dataset = dataset;
    next();
}


datasetsApi.get("/", (req, res) => {
    res.send("DatasetsApi successfully reached.");
});

datasetsApi.get("/getDatasetFromID/:id", findDataset, async(req, res) => {
    try {
        res.status(200).json(res.dataset);
    } catch (e) {
        console.log(e);
        res.status(404).end();
    }
});

export default datasetsApi;