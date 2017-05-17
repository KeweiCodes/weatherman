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

function city(state = { data: {} }, action){
  let { type, city } = action;
  switch (type){
    case 'ERROR_FETCH':
      return {
        isLoading: false,
        error: true,
        data: {}
      }
    case 'FINISH_FETCH':
      return {
        isLoading: false,
        error: false,
        data: city
      };
    case 'START_FETCH':
      return {
        isLoading: true,
        error: false,
        data: {}
      }
    default:
      return state;
  }
}

function views(state = [], action){
  let { type, views } = action;

  if(action.type === 'FINISH_FETCH_VIEWS'){
    console.log(state);
    return [...action.views];
  }else{
    return state;
  }
}

export default combineReducers({
  data, city, views, routing: routerReducer
});
