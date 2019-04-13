import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import characterReducer from './characterReducer';
import pageReducer from './pageReducer';
import modalReducer from './modalReducer';
export default combineReducers({
    item: itemReducer,
    activeCharacter:characterReducer,
    activePage:pageReducer,
    modal:modalReducer
});