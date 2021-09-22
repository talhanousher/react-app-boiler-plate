import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Auth from "./auth/Auth";
import Main from './main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/main" component={Main} />
          <Redirect to="/main/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
