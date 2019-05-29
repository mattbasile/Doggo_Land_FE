import * as actions from '../actions/actionTypes'
const initialState = {
    dogs: [],
    kennels: [],
    selected_kennel: [],
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
    case actions.visitorTypes.FETCH_KENNELS_START:
        return{
            ...state,
            error: null,
            loading: true
        }
    case actions.visitorTypes.FETCH_KENNELS_SUCCESS:
        return{
            ...state,
            kennels: payload
        }
    case actions.visitorTypes.FETCH_KENNELS_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
    case actions.visitorTypes.FETCH_KENNELBYID_START:
        return{
            ...state,
            error: null,
            loading: true
        }
    case actions.visitorTypes.FETCH_KENNELBYID_SUCCESS:
        return{
            ...state,
            selected_kennel: payload
        }
    case actions.visitorTypes.FETCH_KENNELBYID_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
    default:
        return state
    }
}
