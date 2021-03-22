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
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles/";


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#ffffff"
      },
        secondary: {
            main: '#d32f2a'
        },
    
       
      },
});
  return (
    
    <div className="App">
      <MuiThemeProvider theme={theme}>
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
       
       </MuiThemeProvider>
    </div>
  
  );
}

export default App;
