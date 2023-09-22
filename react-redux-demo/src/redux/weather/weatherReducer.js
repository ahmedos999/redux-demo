import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from "./weatherTypes"

const initialState={
    loading:false,
    weather:[],
    error:''
}


export const weatherReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_WEATHER_REQUEST:return{
            ...state,
            loading:true
        };
        case FETCH_WEATHER_SUCCESS:return{
            ...state,
            loading:false,
            weather:action.payload
        };
        case FETCH_WEATHER_FAILURE:return{
            ...state,
            loading:false,
            error:action.payload
        }
    }
}