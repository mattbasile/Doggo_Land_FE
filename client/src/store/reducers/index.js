import * as actions from '../actions/actionTypes'
const initialState = {
    dogs: [],
    kennels: [],
    selected_kennel: [],
    return_message: [],
    loading: false,
    error: null,
    submitting: false,
    submitted: true,
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
            dogs: payload,
            loading: false,
            error: null,
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
            kennels: payload,
            loading: false,
            error: null,
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
            selected_kennel: payload,
            loading: false,
            error: null,
        }
    case actions.visitorTypes.FETCH_KENNELBYID_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
    case actions.visitorTypes.POST_NOTIFICATION_START:
        return{
            ...state,
            error: null,
            submitting: true
        }
    case actions.visitorTypes.POST_NOTIFICATION_SUCCESS:
        return{
            ...state,
            return_message: payload,
            submitting: false,
            submitted: true,
            error: null,
        }
    case actions.visitorTypes.POST_NOTIFICATION_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
    default:
        return state
    }
}
