import Header from "./Header"
import './App.css';
import FeaturedQuestions from "./FeaturedQuestions"
import About from "./About"
import Creators from "./Creators"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router >
       <Header />
        <Switch>
         
          <Route path="/" exact>
            <FeaturedQuestions />
            <About />
          </Route>
          <Route path="/Questions" exact>
            <About />
          </Route>
        </Switch>
        </Router>
       
  
        {/*
         <Creators /> */}
       
  
    </div>
  );
}

export default App;
