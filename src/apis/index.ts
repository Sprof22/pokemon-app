import axios from "axios"

export default {
    fetchPokemons: async function () {
        return axios.get('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
    }
}