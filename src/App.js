import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import LandingPage from "./landing_page";
import PostView from "./post-view";
import Upload from "./upload";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/postview" component ={PostView}></Route>
      <Route exact path = "/postview/upload" component={Upload}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
