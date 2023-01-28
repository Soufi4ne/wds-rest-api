require("dotenv").config();

//create a express server
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

//set the "strictQuery" option to "false" and prevent the warning from being displayed.
mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});