const express = require('express');
const cors = require('cors');

const countryRouter = require('./routers/countries');

const app = express();

 app.use(cors());
 app.use(express.json());
 app.use("/countries", countryRouter)

app.get('/', (req, res) => {
    res.send("This is a countries API")
})


module.exports = app;