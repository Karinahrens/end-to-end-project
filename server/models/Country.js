const db = require('../db/connect');

class Country {
    constructor(country){
        this.country_id = country.country_id
        this.name = country.name
        this.capital = country.capital
        this.population = country.population
        this.languages = country.languages
        this.fun_fact = country.fun_fact
        this.map_image_url = country.map_image_url
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM country");
        if (response.rows.length === 0) {
            throw new Error("No countries available")
        }
        return response.rows.map(c => new Country(c));
    }
    

    static async getOneByCountryName(name) {
        const response = await db.query("SELECT * FROM country WHERE LOWER(name) = LOWER($1)", [name]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate country.")
        }
        return new Country(response.rows[0]);
    }

    static async create(data) {
        const { name, capital, population, languages  } = data;
        let response = await db.query("INSERT INTO country (name, capital, population,languages) VALUES ($1, $2, $3, $4 ) RETURNING *;", [name, capital, population, languages]);
        
        return new Country(response.rows[0]);
    }

    // async destroy() {
    //     let response = await db.query("DELETE FROM country WHERE country_id = $1 RETURNING *;", [this.id]);
    //     return new Country(response.rows[0]);
    // }

}

module.exports = Country;

