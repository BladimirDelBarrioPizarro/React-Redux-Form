import {SET_HANDLE_FORM} from '../types/types';


const initialState = {
    data : []
}

export default function form(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_FORM:
            state.data.push(action.payload); 
            return {
                data: state.data
            }
        default:
            return state;
    }
} 