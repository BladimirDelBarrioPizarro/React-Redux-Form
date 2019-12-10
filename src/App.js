import React from 'react';
import './App.css';
import store from './store';
import Form from './modules/form/components/form.component';

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="text-center">Coutes Manager</h1>
      </header>

      <div className="row mt-3">
          <div className="col-md--6">
                <Form></Form>
          </div>
          <div className="col-md-6">
              
          </div>
      </div>
    </div>
  );
}

export default App;
