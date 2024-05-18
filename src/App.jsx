// CSS
import "./App.css";

// Libbers
import { useState } from "react";

// Jason Data

// Components
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handeleClickG = () => {
    setState({ ...state, good: state.good + 1 });
  };

  const handeleClickN = () => {
    setState({ ...state, neutral: state.neutral + 1 });
  };

  const handeleClickB = () => {
    setState({ ...state, bad: state.bad + 1 });
  };

  return (
    <>
      <Description />
      <Options value={state.good} handeleClick={handeleClickG} />
      <Options value={state.neutral} handeleClick={handeleClickN} />
      <Options value={state.bad} handeleClick={handeleClickB} />
      <Feedback />
    </>
  );
};
export default App;
