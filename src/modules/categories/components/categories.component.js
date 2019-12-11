import React,{Component} from 'react';
import {connect} from 'react-redux';
import store from '../../../store';
import {handleCategories} from '../actions/categories.actions';

const CategoriesContext = React.createContext();

export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component{
    state = {
        categories:[]
    }

    componentDidMount(){
        store.dispatch(handleCategories());
    }


    render(){
        return(
           <CategoriesContext.Provider
            value = {{
                categories: this.state.categories
            }}
           >
            {this.props.children}
           </CategoriesContext.Provider>
        );
    }
}



const mapStateToProps = (state) =>({
    categories:state.data
  }) 

export default connect(mapStateToProps,null) (CategoriesProvider);