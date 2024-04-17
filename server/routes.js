import express from "express";

// Imports route api
import datasetsApi from "./controller/datasetsController.js";

const api = express.Router();

api.use("/datasets", datasetsApi);

export default api;