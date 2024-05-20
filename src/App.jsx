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
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  }
  const state = ["Good", "Bad", "Natural"];
  return (
    <>
      <Description />
      {state.map((el) => (
        <Options key={el} onClick={() => updateFeedback("good")}>
          {el}
        </Options>
      ))}
      <Feedback
        good={feedback.good}
        bad={feedback.bad}
        natural={feedback.neutral}
      />
    </>
  );
};

export default App;
