import axios from 'axios';

const SpaceXClient = {
    get: async () => {
        return await axios.get('https://api.spacexdata.com/v3/launches');
    },

    post: () => {
        axios.post('https://api.spacexdata.com/v3/launches')
            .then(res => {
                return res.data
            })
    },

    put: () => {
        axios.put('https://api.spacexdata.com/v3/launches')
            .then((res) => {
                return res.data;
            })
    },

    delete: () => {
        axios.delete('https://api.spacexdata.com/v3/launches')
            .then(function (res) {
                return res.data;
            })
    }
};

export default SpaceXClient;
