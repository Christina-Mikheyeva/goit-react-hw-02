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

  function updateFeedback(feedbackType) {
    setState({ ...state, feedbackType: state.feedbackType + 1 });
  }

  // const handeleClickG = () => {
  //   setState({ ...state, good: state.good + 1 });
  // };

  // const handeleClickN = () => {
  //   setState({ ...state, neutral: state.neutral + 1 });
  // };

  // const handeleClickB = () => {
  //   setState({ ...state, bad: state.bad + 1 });
  // };

  return (
    <>
      <Description />
      <Options onClick={() => updateFeedback("good")}>Good</Options>
      <Options onClick={() => updateFeedback("neutral")}>Neutral</Options>
      <Options onClick={() => updateFeedback("bad")}>Bad</Options>
      <Feedback state={state} />
    </>
  );
};

export default App;
