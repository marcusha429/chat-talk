const express = require("express");
const { chats } = require("./data/data");
const app = express();

const dotenv = require("dotenv");
dotenv.config()

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

app.listen(5000, console.log(`Server on PORT ${PORT}`));