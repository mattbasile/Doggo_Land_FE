import {adminTypes} from "./actionTypes";
import API from "../../axios-instance";

export const getNotifications = id =>dispatch=>{
    dispatch({type: adminTypes.GET_NOTIFICATION_START});
    API.get(`admin/notifications/${id}`)
    .then(res => dispatch({type:adminTypes.GET_NOTIFICATION_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: adminTypes.GET_NOTIFICATION_FAIL, payload: err}))
}