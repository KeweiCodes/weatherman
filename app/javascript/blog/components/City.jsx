import React from 'react';

class City extends React.Component{
  render(){
    let { city } = this.props;
    return (
      <div>
        <h2>{city.name}, {city.country}</h2>
      </div>
    )
  }
}

export default City;
