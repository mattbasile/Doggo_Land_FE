import * as actions from '../actions/actionTypes'
const initialState = {
    dogs: [],
    loading: false,
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.visitorTypes.FETCH_DOGS_START:
        return{
            ...state,
            error: null,
            loading: true
        }
    case actions.visitorTypes.FETCH_DOGS_SUCCESS:
        return{
            ...state,
            dogs: payload
        }
    case actions.visitorTypes.FETCH_DOGS_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
    default:
        return state
    }
}
