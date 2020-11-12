import React from 'react';
import './App.css';
import Category from './containers/Category/Category'
import { Route, Switch , Redirect } from 'react-router-dom'
import Level from './containers/Level/Level';
import Quiz from './containers/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/category" exact component={Category} />
        <Route path="/category/:category" exact component={Level} />
        <Route path="/category/:category/:difficult" component={Quiz}/>
        <Redirect to="/category"/>
      </Switch>
    </div>
  );
}

export default App;
