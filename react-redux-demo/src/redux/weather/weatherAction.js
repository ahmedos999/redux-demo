import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from "./weatherTypes"
import axios from "axios"


export const fetchWeatherRequset = ()=>{
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

export const fetchWeather = ()=>{
    return function(dispatch){
        dispatch(fetchWeatherRequset)
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=london&appid=2ff182dd6e93f504d5493ce6916c1f56')
        .then(respone=>{
            const weather = respone.data
            dispatch(fetchWeatherSuccess(weather))
        }).catch(e=>{
            dispatch(fetchWeatherFailure(e.message))
        })
    }
}