import { combineReducers } from "redux";

import cakeReducer from './cakes/ReducerCake'
import icecreamReducer from './icecream/icecreamReducer'
import userReducer from "./user/userReducer";

const rootReduacer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer
})

export default rootReduacer