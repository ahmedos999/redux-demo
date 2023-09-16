const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE  ='buy cake'

const BUY_ICEREAM  ='buy iceream'



function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First redux action'
    }
}

function buyIceam(){
    return {
        type:BUY_ICEREAM,
    }
}

const initialCakeState = {
    numOfCakes:10,

}
const initialIceCreamState = {

    numOfIcecreams:20
}

const cakeReducer = (state = initialCakeState,action)=>{
    switch(action.type){
       case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
        default: return state
    }
      
}
const IceCremReducer = (state = initialIceCreamState,action)=>{
    switch(action.type){
    case BUY_ICEREAM: return{
            ...state,
            numOfIcecreams:state.numOfIcecreams - 1
    }
    default: return state
}

}
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:IceCremReducer
})
const store = createStore(rootReducer)

console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=>console.log('Updated state ',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceam())
store.dispatch(buyCake())
store.dispatch(buyIceam())
store.dispatch(buyIceam())


unsubscribe()