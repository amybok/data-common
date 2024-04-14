import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express()

app.get("/", (req, res) => {
    res.send("Successful response")
});

app.listen(3000, () => {console.log("Server started on port 3000")})