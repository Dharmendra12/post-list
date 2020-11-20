import { combineReducers } from 'redux';
import misc from './miscReducer';
import post from './postReducer';
export default combineReducers({ misc, post });
