import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import api from "./routes.js"
import datasets from "./data/datasets.js"

const app = express();
app.use(cors({
    origin: "https://data-commons.vercel.app",
    methods: "GET,HEAD,PUT,POST"
}))

app.use("/api", api);


app.get("/", (req, res) => {
    res.send("Successful response")
});

app.listen(3001, () => {console.log("Server started on port 3001")})
