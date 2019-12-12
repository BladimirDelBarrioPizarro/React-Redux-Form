import React,{Component} from 'react';
import store from '../../../store';
import {connect} from 'react-redux';

class FormCategories extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            categories:[]
        }
        store.subscribe(() => {
            this.setState({
                categories : store.getState().categories.data
            });
          });        
    }
    
   

    render(){
        const {categories} = this.state;
        console.log(categories)
        return(
            <form>
                <fieldset className='uk-fieldset uk-margin'>
                    <legend className='uk-legend uk-text-center'>
                    Search your event by name or category
                    </legend>
                </fieldset>

                <div className='uk-column-1-3@m uk-margin'>
                    <div className='uk-margin' uk-margin='true'>
                        <input
                            name='nombre'
                            className='uk-input'
                            type='text'
                            placeholder='Event name or city' 
                        />
                    </div>

                    <div className='uk-margin' uk-margin='true'>
                        <select
                            className='uk-select'
                            name='categorie'>
                               <option value="" disabled>{}</option>
                               {categories.map((t,i) => <option key={i} value={t.name}>{t.name}</option>)}
                        </select>
                    </div>

                    <div>
                        <input type='submit' 
                               className='uk-button uk-button-danger'
                               value='Search event'
                        />       
                    </div>    
                </div>
            </form>    
        );
    }
}


const mapStateToProps = (state) =>({
    formcategories:state.data
  }) 

export default connect(mapStateToProps,null) (FormCategories);