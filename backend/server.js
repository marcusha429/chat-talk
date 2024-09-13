const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes")
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require("./config/db");
dotenv.config()
connectDB();

const app = express();

app.use(express.json());  // to acceptr JSON data
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("API running");
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`.yellow.bold);
});