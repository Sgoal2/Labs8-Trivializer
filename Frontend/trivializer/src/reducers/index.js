// import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
    questions: [],
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
        default:
            return state;
    }
};
