import React from 'react';
import store from './store';
import Form from './modules/form/components/form.component';
import FormCategories from './modules/categories/components/form.component';
import Header from './modules/header/components/header.component';
import CategoriesProvider from './modules/categories/components/categories.component';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render(){
    return (
      <div className="container">
        <header>
          <Header></Header>
        </header>
      
        <CategoriesProvider>
          <Form></Form>
        </CategoriesProvider>
       <div className='uk-container'>
          <FormCategories></FormCategories>
       </div>
      </div>
    );
  }
}

export default App;
