export function startFetch(){
  console.log('starting fretch');
  return {
    type: 'START_FETCH',
    query: ''
  }
}

export function finishFetch(city, result){
  console.log('finished!', city, result);
  return {
    type: 'FINISH_FETCH',
    city,
    result
  }
}

export function finishFetchViews(views){
  return {
    type: 'FINISH_FETCH_VIEWS',
    views
  }
}
