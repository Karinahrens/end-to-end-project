const express = require('express');
const cors = require('cors');

// const logRoutes = require('./middleware/logger');
const countryRouter = require('./routers/countries');
// const userRouter = require('./routers/user');

const app = express();

 app.use(cors());
 app.use(express.json());
 app.use("/countries", countryRouter)
// app.use(logRoutes);

app.get('/', (req, res) => {
    res.send("This is a countries API")
})


module.exports = app;