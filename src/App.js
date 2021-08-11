import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import EventList from './EventsList';


function App() {
  return (
    <Router>
      <div className="App">
      <div className="content">
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/events">
                    <EventList />
                  </Route>
                  <Route path="*">
                    <NotFound/>
                  </Route>
                </Switch>    
            </div>  
      </div>
    </Router>
      
    
  );
}

export default App;
