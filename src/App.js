import Header from "./Header"
import './App.css';
import About from "./About"
import Creators from "./Creators"
import FullQuestions from "./FullQuestions"
import Question from "./Question"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router >
       <Header />
        <Switch>
         
          <Route path="/" exact>
            <Question />
            <About />
          </Route>
          <Route path="/Questions" exact>
        <FullQuestions />
       
        
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
