require('dotenv').config({ path: './.env' })
let config = module.exports = {};

config.printful = {
    access_token:  process.env.printful_access_token,
};