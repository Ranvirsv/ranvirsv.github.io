import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Slides from "./components/Slider/Slides";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Slides />
      <Experience />
    </div>
  );
}

export default App;
