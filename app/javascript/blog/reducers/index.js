import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function data(state = [], action){
  let { type, result } = action;
  switch (type){
    case 'FINISH_FETCH':
      return result;
    default:
      return state;
  }
}

function city(state = {}, action){
  let { type, city } = action;
  switch (type){
    case 'FINISH_FETCH':
      return city;
    default:
      return state;
  }
}


export default combineReducers({
  data, city, routing: routerReducer
});
