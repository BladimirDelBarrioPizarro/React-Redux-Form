import React from 'react';
import store from './store';
import Form from './modules/form/components/form.component';
import Header from './modules/header/components/header.component';
import CategoriesProvider from './modules/categories/components/categories.component';

function App() {
  return (
    <div className="container">
      <header>
        <Header></Header>
      </header>
     {/*  <React.Fragment>
        <Form></Form>
      </React.Fragment> */}
      <CategoriesProvider>
        <Form></Form>
      </CategoriesProvider>
    </div>
  );
}

export default App;
