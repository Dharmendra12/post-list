import axios from 'axios';
import { POST_LIST } from './types';
import { setLoading } from './miscActions';

export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/post-list');
        dispatch(setLoading(false));
        dispatch({
            type: POST_LIST,
            payload: res.data.data,
        });
    } catch (error) {
        dispatch(setLoading(false));
    }
};
