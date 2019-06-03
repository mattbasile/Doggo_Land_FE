import{visitorTypes} from "./actionTypes";

import API from '../../axios-instance'


export const getDogs = () => dispatch =>{
    console.log('started to get dogs')
    dispatch({type: visitorTypes.FETCH_DOGS_START});
    API.get('/visitors/dogs')
    .then(res => dispatch({type: visitorTypes.FETCH_DOGS_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: visitorTypes.FETCH_DOGS_FAIL, payload: err}))
}
export const getKennels = () => dispatch =>{
    console.log('started to get kennels')
    dispatch({type: visitorTypes.FETCH_KENNELS_START});
    API.get('/visitors/kennels')
    .then(res => dispatch({type: visitorTypes.FETCH_KENNELS_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: visitorTypes.FETCH_KENNELS_FAIL, payload: err}))
}
export const getKennelById = id => dispatch =>{
    console.log(id, 'getkennel')
    dispatch({type: visitorTypes.FETCH_KENNELBYID_START});
    API.get(`/visitors/kennels/${id}`)
    .then(res => dispatch({type: visitorTypes.FETCH_KENNELBYID_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: visitorTypes.FETCH_KENNELBYID_FAIL, payload: err}))
}

export const createNotification = (content) => dispatch =>{
    console.log(content)
    dispatch({type: visitorTypes.POST_NOTIFICATION_START});
    API.post(`/visitors/notifications`,content)
    .then(res => dispatch({type: visitorTypes.POST_NOTIFICATION_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: visitorTypes.POST_NOTIFICATION_FAIL, payload: err}))
}