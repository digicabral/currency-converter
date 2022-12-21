var Rate = require('../db_models/rate');
const fs = require('fs').promises;

async function get(req, res, next){
    try {
        async function readJson() {
            const data = await fs.readFile('./rate.json');
            return data;
        }
        JSONrates = await readJson();
        ratesParsed = JSON.parse(JSONrates);
        let rates = {
            'date': ratesParsed.date,
            'base': ratesParsed.base,
            'brl': ratesParsed.rates.BRL,
            'jpy': ratesParsed.rates.JPY,
            'eur': ratesParsed.rates.EUR,
            'usd': ratesParsed.rates.USD
        }
        await Rate.create(rates).then(()=>{
            res.send('Rate inserted');
            })               
        }
    catch(err){
        next(err)
    }
    
}
module.exports.get = get;

