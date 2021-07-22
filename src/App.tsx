import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Edit from './components/Edit/Edit';


function App() {

  return (
   <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Redirect to="/feed" /> :
          </Route>

          <Route strict path="/feed">
            <Header />
            <Feed />
          </Route>

          <Route  path="/edit/:id/:userId">
            <Header />
            <Edit />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
