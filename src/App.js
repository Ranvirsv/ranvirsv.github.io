import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Slides from "./components/Slider/Slides";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Slides />
    </div>
  );
}

export default App;
