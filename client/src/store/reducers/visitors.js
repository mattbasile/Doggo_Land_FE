import {visitorTypes} from '../actions/actionTypes'
const initialState = {
    dogs: [],
    kennels: [],
    selected_kennel: [],
    return_message: [],
    loading: false,
    error: null,
    submitting: false,
    submitted: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case visitorTypes.FETCH_DOGS_START:
        return{
            ...state,
            error: null,
            loading: true
        }
    case visitorTypes.FETCH_DOGS_SUCCESS:
        return{
            ...state,
            dogs: payload,
            loading: false,
            error: null,
        }
    case visitorTypes.FETCH_DOGS_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
    case visitorTypes.FETCH_KENNELS_START:
        return{
            ...state,
            error: null,
            loading: true
        }
    case visitorTypes.FETCH_KENNELS_SUCCESS:
        return{
            ...state,
            kennels: payload,
            loading: false,
            error: null,
        }
    case visitorTypes.FETCH_KENNELS_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
    case visitorTypes.FETCH_KENNELBYID_START:
        return{
            ...state,
            error: null,
            loading: true
        }
    case visitorTypes.FETCH_KENNELBYID_SUCCESS:
        return{
            ...state,
            selected_kennel: payload,
            loading: false,
            error: null,
        }
    case visitorTypes.FETCH_KENNELBYID_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
    case visitorTypes.POST_NOTIFICATION_START:
        return{
            ...state,
            error: null,
            submitting: true
        }
    case visitorTypes.POST_NOTIFICATION_SUCCESS:
        return{
            ...state,
            return_message: payload,
            submitting: false,
            submitted: true,
            error: null,
        }
    case visitorTypes.POST_NOTIFICATION_FAIL:
        return{
            ...state,
            error: payload,
            loading: false
        }
    case visitorTypes.CLEAR_STATE_START:
        return{
            ...state,
            selected_kennel: [],
            return_message: [],
            loading: false,
            error: null,
            submitting: false,
            submitted: false,
        }
    default:
        return state
    }
}
