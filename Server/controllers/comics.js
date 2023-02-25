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

module.exports.searchComic = async(req, res) => {
    try {
        await axios.get(`${apiURI}/v1.0/search/?type=comic&page=1&limit=30&q=${req.params.comic}&t=false`).then(
            response => {
                const data = response.data
                res.send(data)
                return data
            }
        )
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports.getChapters = async(req, res) => {
    try {
        await axios.get(`${apiURI}/comic/${req.params.hid}/chapters?lang=en`).then(
            response => {
                const data = response.data
                res.send(data)
                return data
            }
        )
    } catch (err) {
        console.log(err)
        return err
    }
}

module.exports.getChapter = async(req, res) => {
    try {
        await axios.get(`${apiURI}/chapter/${req.params.hid}?lang=en`).then(
            response => {
                const data = response.data
                res.send(data)
                return data
            }
        )
    } catch (err) {
        console.log(err)
        return err
    }
}

module.exports.getComicData = async(req, res) => {
    try {
        await axios.get(`${apiURI}/comic/${req.params.slug}`).then(
            response => {
                const data = response.data
                res.send(data)
                return data
            }
        )
    } catch (err) {
        console.log(err)
        return err
    }
}