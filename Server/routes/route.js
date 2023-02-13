const router = require('express').Router()

const { getTopTrendingManga, getTopTrendingManwha, searchComic, getChapter, getChapters } = require('../controllers/comics.js')

router.get('/top_comics/manga', getTopTrendingManga)
router.get('/top_comics/manhwa', getTopTrendingManwha)
router.get('/search/:comic', searchComic)
router.get('/comic/:hid', getChapter)
router.get('/comics/:hid', getChapters)

module.exports = router