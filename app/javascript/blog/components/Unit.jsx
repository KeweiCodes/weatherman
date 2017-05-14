import React from 'react';
import Radium from 'radium';
import moment from 'moment';
import icon_day from '../assets/day.svg';
import icon_thunder from '../assets/thunder.svg';
import icon_drizzle from '../assets/rainy-4.svg';
import icon_rain from '../assets/rainy-7.svg';
import icon_snow from '../assets/snowy-6.svg';
import icon_cloudy from '../assets/cloudy.svg';
import icon_cloudy_day from '../assets/cloudy-day-3';

let style = {
  WebkitTransition: 'all 0.4s',
  transition: 'all 0.4s',
  textAlign: 'center',
  ':hover': {
    backgroundColor: 'skyblue'
  },
  ':first-letter': {
    'text-transformation': 'capitalize'
  }
}

class Unit extends React.Component{
  render(){
    let { dt_txt, main, weather } = this.props.data;
    let weather_id = weather[0].id;
    let weather_icon;
    if(weather_id < 300){
      weather_icon = icon_thunder;
    }else if(weather_id < 500){
      weather_icon = icon_drizzle;
    }else if(weather_id < 600){
      weather_icon = icon_rain;
    }else if(weather_id < 700){
      weather_icon = icon_snow
    }else if(weather_id < 800){
      weather_icon = icon_cloudy_day;
    }else if(weather_id === 800){
      weather_icon = icon_day;
    }else if(weather_id < 900){
      weather_icon = icon_cloudy;
    }else {
      weather_icon = icon_cloudy_day;
    }
    return(
      <div style={style} className="col-sm-2">
        <img src={weather_icon}/>
        <div>{moment.parseZone(dt_txt).format('MMM D HA')}</div>
        <div>{main.temp_min}°C ~ {main.temp_max}°C</div>
        <div>{weather[0].description}</div>
      </div>
    )
  }
}

export default Radium(Unit);
