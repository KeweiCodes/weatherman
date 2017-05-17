import React from 'react';
import Please from 'pleasejs';

let [c1, c2] = Please.make_scheme(
  Please.make_color({
    format: 'hsv',
    saturdation: '1.0'
  })[0],
  {
    scheme_type: 'complementary'
  }
);

let cityStyle = {
  textAlign: 'center'
}

let rowStyle = {
  backgroundColor: c1,
  color: c2,
  fontFamily: "'Fredoka One', cursive",
  textShadow: '1px 1px white',
  fontSize: '28px'
}

let inputStyle = {
  background: 'transparent',
  height: '42px',
  border: '2px solid darkslategray',
  fontFamily: "'Frank Ruhl Libre', sans-serif",
  color: 'white',
  textShadow: '1px 1px black'
}

class City extends React.Component{
  render(){
    let city = this.props.city.data;
    return (
      <div style={rowStyle} className="row rowStyle">
        <div className="col-md-2">
          Enter City:
        </div>
        <div className="col-md-7">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' style={inputStyle} ref="city" className="form-control"/>
          </form>
        </div>
        <div className="col-md-3" style={cityStyle}>{city.name}, {city.country}</div>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.city.value);
    this.fetchData();
  }

  fetchData(){
    let { startFetch, finishFetch } = this.props;
    let cityInput = this.refs.city;
    let cityName = cityInput.value;
    if(!cityName){
      return;
    }
    startFetch();
    fetch(`//api.openweathermap.org/data/2.5/forecast?APPID=aeeb99523882090ee49ca2f2560ae5c4&units=metric&q=${cityName}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let { city, list } = response;
        finishFetch(city, list);
      });
    fetch('//localhost:3000/api/views', {
      method: 'POST',
      body: JSON.stringify({
        city: cityName
      }),
      headers: {
        'Authorization': `Bearer ${window._token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((reponse) => {
        console.log(reponse);
      })
  }
}

export default City;
