const axios = require('axios');

async function get(name) {
    return await axios.get('https://api.agify.io/', {params: {name: name}});
}

module.exports.get = get;
