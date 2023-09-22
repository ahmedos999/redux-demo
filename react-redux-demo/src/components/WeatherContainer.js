import { connect } from 'react-redux'
import React ,{ useEffect }from 'react'
import { fetchWeather } from '../redux'

function WeatherContainer({weatherData,fetchWeather}) {
    useEffect(()=>{
        fetchWeather()
    },[])
  return (
    <div>
        {weatherData.loading && <p>Loading for weather data</p>}
        {weatherData.error && <p>{weatherData.error}</p>}
        {weatherData.weather && weatherData.weather.weather.map((weathera)=><p>weather main:{weathera.main} <br/> weather discription {weathera.description}</p>)}
    </div>
  )
}

const mapStateToProps = state =>{
    return{
      weatherData:state.weather
    }
  }
  
  const mapDispatchToprops = dispatch =>{
    return{
        fetchWeather:()=>dispatch(fetchWeather())
    }
  }

export default connect(mapStateToProps,mapDispatchToprops)(WeatherContainer)