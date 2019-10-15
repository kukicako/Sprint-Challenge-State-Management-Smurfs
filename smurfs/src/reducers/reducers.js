import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE, POST_SUCCESS } from "../actions/actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case FETCHING_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCHING_SUCCESS:
            console.log("success")
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ""
            }

        case FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        case POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data
            }
        default:
            return state
    }
} 