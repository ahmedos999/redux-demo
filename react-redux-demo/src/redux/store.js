import { createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
// import cakeReducer from './cakes/ReducerCake'
// import icecreamReducer from './icecream/icecreamReducer'

import rootReduacer from './rootReducer'


const store = createStore(rootReduacer,applyMiddleware(logger))

export default store