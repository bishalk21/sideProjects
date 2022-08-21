import "./App.scss";
import slideData from "./component/SlideData";
import Slider from "./component/Slider";

function App() {
  return (
    <>
      <Slider heading="Example Slider" slides={slideData} />
    </>
  );
}

export default App;
