import React from 'react';
import Unit from './Unit';
import City from './City';

let style = {
  fontFamily: "'Frank Ruhl Libre', sans-serif",
  textAlign: 'center'
}

class Main extends React.Component{
  render(){
    let { data, city } = this.props;
    return (
      <div>
        <h2 style={style}>Weather App</h2>
        <City {...this.props}/>
        { data.map((dataUnit, i) => <Unit key={i} data={dataUnit} />) }
      </div>
    )
  }
}

export default Main;
