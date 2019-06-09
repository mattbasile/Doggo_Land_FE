import {authTypes} from "./actionTypes";
import API from "../../axios-instance";

export const login = user =>dispatch=>{
    dispatch({type: authTypes.LOGIN_START});
    API.post("/admin/login", user)
    .then(res => dispatch({type: authTypes.LOGIN_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: authTypes.LOGIN_FAIL, payload: err}))
}
export const register = user =>dispatch=>{
    console.log(user)
    dispatch({type: authTypes.REGISTER_START});
    API.post("/admin/register", user)
    .then(res => dispatch({type: authTypes.REGISTER_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: authTypes.REGISTER_FAIL, payload: err}))
}