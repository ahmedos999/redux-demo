import { createStore } from 'redux'
// import cakeReducer from './cakes/ReducerCake'
// import icecreamReducer from './icecream/icecreamReducer'

import rootReduacer from './rootReducer'


const store = createStore(rootReduacer)

export default store