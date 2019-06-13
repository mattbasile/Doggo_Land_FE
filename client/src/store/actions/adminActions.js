import {adminTypes} from "./actionTypes";
import API from "../../axios-instance";

export const getNotifications = id =>dispatch=>{
    dispatch({type: adminTypes.GET_NOTIFICATION_START});
    API.get(`admin/notifications/${id}`)
    .then(res => dispatch({type:adminTypes.GET_NOTIFICATION_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: adminTypes.GET_NOTIFICATION_FAIL, payload: err}))
}
export const getBreeds = ()=>dispatch=>{
    dispatch({type: adminTypes.GET_BREEDS_START});
    API.get("admin/breeds")
    .then(res => dispatch({type:adminTypes.GET_BREEDS_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: adminTypes.GET_BREEDS_FAIL, payload: err}))
}

export const addDog = dog =>dispatch=>{
    console.log("addDog", dog)
    dispatch({type: adminTypes.ADD_DOG_START});
    API.post("admin/dogs", dog)
    .then(res => dispatch({type:adminTypes.ADD_DOG_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: adminTypes.ADD_DOG_FAIL, payload: err}))
}