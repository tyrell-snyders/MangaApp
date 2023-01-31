const axios = require('axios')
const apiURI = 'https://api.comick.app'

module.exports.getTopTrendingManga = async(req, res) => {
    try {
        await axios.get(`${apiURI}/top?type=trending&comic_types=manga`).then(
            response => {
                const data = response.data
                res.send(data)
                return data
            }
        )
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.getTopTrendingManwha = async(req, res) => {
    try {
        await axios.get(`${apiURI}/top?type=trending&comic_types=manhwa`).then(
            response => {
                const data = response.data
                res.send(data)
                return data
            }
        )
    } catch (e) {
        console.log(e)
        return e
    }
}