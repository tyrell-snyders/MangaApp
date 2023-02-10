const router = require('express').Router()

const { getTopTrendingManga, getTopTrendingManwha, searchComic } = require('../controllers/comics.js')

router.get('/top_comics/manga', getTopTrendingManga)
router.get('/top_comics/manhwa', getTopTrendingManwha)
router.get('/search/:comic', searchComic)

module.exports = router