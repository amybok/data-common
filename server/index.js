import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import api from "./routes.js"
import datasets from "./data/datasets.js"

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,P"
}))

app.use("/api", api);


app.get("/", (req, res) => {
    res.send("Successful response")
});

app.listen(3000, () => {console.log("Server started on port 3000")})