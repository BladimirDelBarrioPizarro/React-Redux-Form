import axios from 'axios';
import {GET_CATEGORIES} from '../types/types';
import {URL_GET_CATEGORIES,HEADERS} from '../../constants/constants';


export const handleCategories = () => dispatch => {
    axios.get(URL_GET_CATEGORIES,HEADERS)
    .then((res) => {
        localStorage.setItem("categories",JSON.stringify(res.data.categories))
        return dispatch({
            type: GET_CATEGORIES,
            payload:res
        })
    })
    .catch((err) =>{
        console.log(err)
    })  
}
