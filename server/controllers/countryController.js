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

async function create (req, res) {
    try{
        const data = req.body;
        const newCountry = await Country.create(data);
        res.status(201).send(newCountry);

    } catch (err) {
        res.status(400).json({"error": err.message})

    }
};

// async function update (req, res) {
//     try{
//         const name = (req.params.name);
//         const newName = (req.body);
//         // const checkQuery = ('SELECT * FROM country WHERE name = $1');
//         // const checkValues = [name];
//         // const existingData = await db.query(checkQuery, checkValues);
  
//         const updatedCountry = await Country.update(newName);
//         res.status(200).send(updatedCountry);
          
      

//     } catch (err) {
//         res.status(400).json({"error": err.message})

//     }
// };

async function update (req, res) {
    try {
        const name = req.params.name.toLowerCase()
        const data = req.body;
        const country = await Country.getOneByCountryName(name);
        const result = await country.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}


async function destroy(req, res) {
    try{
        const name = (req.params.name);
        const country = await Country.getOneByCountryName(name);
        const result = await country.destroy();
        res.status(204).send();

    } catch (err) {
        res.status(404).json({"error": err.message})
    }
    

};
module.exports = { index, show, create, update, destroy }