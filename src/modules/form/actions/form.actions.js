import axios from 'axios';
import {SET_HANDLE_FORM} from '../types/types';


export const handleFormAction = (json) => dispatch =>  {
    axios.post(`http://localhost:3001/quotes`, json)
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