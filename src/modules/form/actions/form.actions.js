import axios from 'axios';
import {SET_HANDLE_FORM} from '../types/types';
import {URL_POST_QUOTE} from '../../constants/constants';

export const handleFormAction = (json) => dispatch =>  {
    axios.post(URL_POST_QUOTE, json)
    .then((res) => {
        return dispatch({
            type: SET_HANDLE_FORM,
            payload:json
        })
    })
    .catch((err) =>{
        console.log(err)
    })  
}   