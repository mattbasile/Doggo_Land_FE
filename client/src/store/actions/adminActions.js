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
export const addBreed = (breed) => async(dispatch)=>{
    const newBreed ={"name":breed}
    dispatch({type: adminTypes.ADD_BREED_START});
    API.post("admin/breeds/add", newBreed)
    .then((res) =>{ 
        dispatch({type:adminTypes.ADD_BREED_SUCCESS, payload: res.data})
        dispatch(getBreeds())
    })
    .catch(err=> dispatch({type: adminTypes.ADD_BREED_FAIL, payload: err}))
}


export const addDog = (dog, breeds) =>dispatch=>{
    console.log("addDog", breeds)
    dispatch({type: adminTypes.ADD_DOG_START});
    API.post("admin/dogs", dog)
    .then(res => {
        dispatch({type:adminTypes.ADD_DOG_SUCCESS, payload: res.data})
        dispatch({type:adminTypes.ASSIGN_BREED_START})
        const assignments = breeds.map(breed=>{
            return{"dog_id": res.data.id, "breed_id":breed.id}
        })
        for(let i=0; i<assignments.length; i++){
            API.post("admin/breeds/assign", assignments[i])
            .then(
                dispatch({type:adminTypes.ASSIGN_BREED_SUCCESS, payload: res.data})
            )
            .catch(
                err=> dispatch({type: adminTypes.ASSIGN_BREED_FAIL, payload: err})
            )
        }
        
    })
    .catch(err=> dispatch({type: adminTypes.ADD_DOG_FAIL, payload: err}))
}