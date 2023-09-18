import { combineReducers } from "redux";

import cakeReducer from './cakes/ReducerCake'
import icecreamReducer from './icecream/icecreamReducer'

const rootReduacer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})

export default rootReduacer