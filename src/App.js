import Header from "./Header"
import './App.css';
import About from "./About"
import Creators from "./Creators"
import QuestionLeft from "./QuestionLeft"
import QuestionRight from "./QuestionRight"
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
            <div className="flex">
            <QuestionLeft />
           <QuestionRight />
            </div>
          
            <div className="flex">
            <QuestionLeft />
           <QuestionRight />
            </div>
            
            <div className="flex">
            <QuestionLeft />
           <QuestionRight />
            </div>
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
