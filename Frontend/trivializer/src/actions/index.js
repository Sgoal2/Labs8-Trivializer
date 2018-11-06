import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

const URL = process.env.REACT_APP_API_URL;

export const fetchReq = () => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios
            .get(`${URL}?amount=10`)
            .then(({ data }) => {
                dispatch({ type: FETCHED, payload: data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    };
};
