const Country = require('../models/Country');

async function index (req, res) {
    try {
        const countries = await Country.getAll();
        res.status(200).send(countries);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
};

async function show (req, res) {
    try {
        const name = req.params.name;
        const country = await Country.getOneByCountryName(name);
        res.status(200).send(country);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};

async function create(req, res) {
    try{
        const data = req.body;
        const newCountry = await Country.create(data);
        res.status(201).send(newCountry);

    } catch (err) {
        res.status(400).json({"error": err.message})

    }
}

module.exports = { index, show, create }