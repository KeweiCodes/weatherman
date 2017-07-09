import React from 'react';
import Unit from './Unit';
import City from './City';
import View from './View';

let style = {
  fontFamily: "'Frank Ruhl Libre', sans-serif",
  textAlign: 'center'
}

class Main extends React.Component{
  render(){
    let { data, city, views } = this.props;
    return (
      <div>
        <h2 style={style}>Weather App</h2>
        <City {...this.props} fetchViews={this.fetchViews.bind(this)}/>
        <div className="col-md-9">
          { data.map((dataUnit, i) => <Unit key={i} data={dataUnit} />) }
        </div>
        <div className="col-md-3">
          <h3>Recent Searches:</h3>
          <ul className="list-group">
            { views.map((view, i) => <View key={i} view={view}/>) }
          </ul>
        </div>
      </div>
    )
  }

  componentWillMount(){
    this.fetchViews();
  }

  componentDidUpdate(prevProps){
    let prevCity = prevProps.city.data;
    let thisCity = this.props.city.data;
    console.log(prevCity, thisCity);
    if( prevCity.id ){
      this.fetchViews();
    }
  }

  fetchViews(){
    fetch( location.origin + '/api/views', {
      headers: {
        'Authorization': `Bearer ${window._token}`
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        this.props.finishFetchViews(response);
      });
  }
}

export default Main;
