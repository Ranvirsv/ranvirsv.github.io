import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Slider />
    </div>
  );
}

export default App;
