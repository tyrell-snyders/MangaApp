import { FETCH_ALL_MANGA, SEARCH, FETCH_ALL_MANHWA, FETCH_COMICK } from '../constants/actionTypes'

export default reducer = (action) => {
    switch (action.payload) {
        case FETCH_ALL_MANGA:
            return action.payload
            break;
        case SEARCH:
            return action.payload
            break;
        case FETCH_ALL_MANHWA:
            return action.payload
            break;
        case FETCH_COMICK:
            return action.payload
            break;
        default:
            break;
    }
}