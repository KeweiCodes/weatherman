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
  color: c2,
  textAlign: 'center'
}

let rowStyle = {
  backgroundColor: c1,
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
    let { city } = this.props;
    return (
      <div style={rowStyle} className="row rowStyle">
        <div className="col-md-2">
          Enter City:
        </div>
        <div className="col-md-7">
          <input type='text' style={inputStyle} className="form-control"/>
        </div>
        <div className="col-md-3" style={cityStyle}>{city.name}, {city.country}</div>
      </div>
    )
  }
}

export default City;
