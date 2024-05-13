import express from "express";

// Imports route api
import datasetsApi from "./controller/datasetsController.js";
import codeApi from "./controller/codeController.js";
const api = express.Router();

api.use("/datasets", datasetsApi);
api.use("/code", codeApi);

export default api;
