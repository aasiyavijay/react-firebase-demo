import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.scss';
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
