import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Links from './components/Links/Links';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Links></Links>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/friends">
            <Friends></Friends>
          </Route>
          <Route exact path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
