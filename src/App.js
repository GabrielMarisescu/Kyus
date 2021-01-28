import Header from "./Header"
import './App.css';
import FeaturedQuestions from "./FeaturedQuestions"
import About from "./About"
import Creators from "./Creators"


function App() {
  return (
    <div className="App">
        <Header />
        <FeaturedQuestions />
        <About /> 
        <Creators />
  
    </div>
  );
}

export default App;
