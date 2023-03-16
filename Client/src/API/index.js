import api from './api'

export const fetchTopManga = () => api.get('/api/comick/top_comics/manga')
export const fetchManga = () => api.get('/api/comick/top_comics/manga')
export const fetchManhwa = () => api.get('/api/comick/top_comics/manhwa')