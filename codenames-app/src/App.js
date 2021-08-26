import 'styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as routes from 'routes';
import HomePage from 'pages/HomePage';
import GamePage from 'pages/GamePage';
import HomePageLarge from 'pages/HomePageLarge';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      footer: null,
    }
  }
  render() {
    return (
      <div className="App">
        <Header
          title="CODENAMES"
        />
  
        <main>
          <Router>
            <Switch>
              <Route exact path="/" >
                <Redirect to={routes.HOME_PATH} />
              </Route>
              <Route path={routes.HOME_PATH}>
                <HomePage />
              </Route>
              <Route path="/homel">
                <HomePageLarge />
              </Route>
              <Route path={routes.GAME_PATH}>
                <GamePage />
              </Route>
            </Switch>
          </Router>
        </main>
        
        <Footer />
      </div>
    );
  }
}

export default App;