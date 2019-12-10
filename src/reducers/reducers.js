
import {combineReducers} from 'redux';
import formReducer from '../modules/form/reducers/reducer';
export default combineReducers({
   form:formReducer
});