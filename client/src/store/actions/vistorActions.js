import{visitorTypes} from "./actionTypes";

import API from '../../axios-instance'


export const getDogs = () => dispatch =>{
    console.log('started to get dogs')
    dispatch({type: visitorTypes.FETCH_DOGS_START});
    API.get('/visitors/dogs')
    .then(res => dispatch({type: visitorTypes.FETCH_DOGS_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: visitorTypes.FETCH_DOGS_FAIL, payload: err}))
}