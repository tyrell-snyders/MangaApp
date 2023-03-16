import { configureStore } from '@redux/toolkit'
import thunk from 'redux-thunk'
import reducer from '../reducers/manga'

export default configureStore({
    reducer,
    middleware: [thunk]
})