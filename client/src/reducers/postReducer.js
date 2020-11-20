import { POST_LIST } from '../actions/types';

const initialState = {
    posts: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_LIST:
            return {
                ...state,
                posts: action.payload,
            };
        default:
            return state;
    }
};
