import React from 'react';
import Unit from './Unit';

class Main extends React.Component{
  render(){
    let { data } = this.props;
    return (
      <div>
        <h2>THis is Main</h2>
        { data.map((dataUnit, i) => <Unit key={i} data={dataUnit} />) }
      </div>
    )
  }

  componentWillMount(){
    let { startFetch, finishFetch } = this.props;
    startFetch();
    fetch(`//api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&APPID=aeeb99523882090ee49ca2f2560ae5c4&units=metric`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let { city, list } = response;
        finishFetch(city, list);
      });
  }
}

export default Main;
