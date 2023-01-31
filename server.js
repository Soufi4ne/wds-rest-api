require("dotenv").config();

//create a express server
const express = require('express');
const app = express();
const port = 3001;
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

const classesRouter = require('./routes/classes');
const studentsRouter = require('./routes/students');
const subjectsRouter = require('./routes/subjects');
const gradesRouter = require('./routes/grades');

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
app.use((req, res, next) => {
    console.log(res.statusCode, res.statusMessage);
    next();
});

app.use("classes", classesRouter); 
app.use("/students", studentsRouter);
app.use("/subjects", subjectsRouter);
app.use("/grades", gradesRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});