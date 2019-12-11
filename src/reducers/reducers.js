
import {combineReducers} from 'redux';
import formReducer from '../modules/form/reducers/reducer';
import categoriesReducer from '../modules/categories/reducers/reducer';
export default combineReducers({
   form:formReducer,
   categories:categoriesReducer
});