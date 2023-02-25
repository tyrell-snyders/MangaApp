const router = require('express').Router()

const { getTopTrendingManga, getTopTrendingManwha, searchComic, getChapter, getChapters, getComicData } = require('../controllers/comics.js')

router.get('/top_comics/manga', getTopTrendingManga)
router.get('/top_comics/manhwa', getTopTrendingManwha)
router.get('/search/:comic', searchComic)
router.get('/comic/:hid', getChapter)
router.get('/comics/:hid', getChapters)
router.get('/comic_data/:slug', getComicData)

module.exports = router