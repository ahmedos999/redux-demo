import { combineReducers } from "redux";

import cakeReducer from './cakes/ReducerCake'
import icecreamReducer from './icecream/icecreamReducer'
import userReducer from "./user/userReducer";
import weatherReducer from "./weather/weatherReducer";

const rootReduacer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer,
    weather:weatherReducer
})

export default rootReduacer