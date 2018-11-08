import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
    games: [],
    rounds: [],
    questions: [],
    invoiced: [],
    fetching: false,
    fetched: false,
    saving: false,
    saved: false,
    updating: false,
    updated: false,
    deleting: false,
    deleted: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetching: true
            });
        case FETCHED:
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                questions: action.payload
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.payload
            });
        default:
            return state;
    }
};
