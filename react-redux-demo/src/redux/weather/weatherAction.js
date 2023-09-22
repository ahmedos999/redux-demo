import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from "./weatherTypes"


export const fetchWeather = ()=>{
    return{
        type:FETCH_WEATHER_REQUEST
    }
}

export const fetchWeatherSuccess = data=>{
    return{
        type:FETCH_WEATHER_SUCCESS,
        payload:data
    }
}

export const fetchWeatherFailure = error=>{
    return{
        type:FETCH_WEATHER_FAILURE,
        payload:error
    }
}