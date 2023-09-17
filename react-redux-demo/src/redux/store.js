import { createStore } from 'redux'
import cakeReducer from './cakes/ReducerCake'


const store = createStore(cakeReducer)

export default store