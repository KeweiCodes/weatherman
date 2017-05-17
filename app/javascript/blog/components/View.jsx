import React from 'react';

let style = {
}

class View extends React.Component{
  render(){
    let { view } = this.props;
    return (
      <li className="list-group-item">
        {view.city}
      </li>
    )
  }
}

export default View;
