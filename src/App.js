import Header from "./Header"
import './App.css';
import FeaturedQuestions from "./FeaturedQuestions"
import About from "./About"
import Creators from "./Creators"
import Modal from "react-modal"

function App() {
  return (
    <div className="App">
      <Modal ></Modal>
   <Header />
  <FeaturedQuestions />
  <About /> 
  <Creators />
    </div>
  );
}

export default App;
