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
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  function updateFeedback(feedbackType) {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  }

  return (
    <>
      <Description />

      <Options state={["Good", "Bad", "Neutral"]} onClick={updateFeedback} />

      <Feedback
        good={feedback.good}
        bad={feedback.bad}
        natural={feedback.neutral}
      />
    </>
  );
};

export default App;
