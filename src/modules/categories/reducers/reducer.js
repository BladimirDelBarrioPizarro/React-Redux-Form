import {GET_CATEGORIES} from '../types/types';

const initialState = {
    data : []
}


export default function categories(state = initialState,action){
    switch(action.type){
        case GET_CATEGORIES:
            return {
                categories: action.payload.data.categories
            }
        default:
            return state;
    }
}

