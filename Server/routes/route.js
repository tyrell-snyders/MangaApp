const router = require('express').Router()

const { getTopTrendingManga, getTopTrendingManwha } = require('../controllers/comics.js')

router.get('/top_comics/manga', getTopTrendingManga)
router.get('/top_comics/manhwa', getTopTrendingManwha)

module.exports = router