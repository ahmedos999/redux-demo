import { createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import cakeReducer from './cakes/ReducerCake'
// import icecreamReducer from './icecream/icecreamReducer'

import rootReduacer from './rootReducer'


const store = createStore(rootReduacer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store