import "./App.css";
import BottomFixNav from "./components/BottomFixNav/BottomFixNav";
import Endcard from "./components/Endcard/Endcard";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import RightFixNav from "./components/RightFixNav/RightFixNav";

function App() {
  return (
    <div className="App">
      <Main />
      <Footer/>
     <Endcard/>
     <RightFixNav/>
     <BottomFixNav/>
    </div>
  );
}

export default App;
