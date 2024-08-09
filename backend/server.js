const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const colors = require("colors");

const connectDB = require("./config/db");
dotenv.config()
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("API running");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`.yellow.bold);
});