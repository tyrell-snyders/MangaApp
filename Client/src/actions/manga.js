import { FETCH_ALL_MANGA, SEARCH, FETCH_ALL_MANHWA, FETCH_COMICK } from '../constants/actionTypes'

import * as api from '../api/index'

export const getTopManga = async(dispatch) => {
    try {
        const { data } = await api.fetchManga()
        dispatch({ type: FETCH_ALL_MANGA, payload: data })
    } catch (error) {
        console.log(error)
    }
}