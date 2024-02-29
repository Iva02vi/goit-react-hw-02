import { useState } from "react";
import { useEffect } from "react";
import "./App.module.css";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";

const App = () => {
  const [values, setValues] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-feedback");
    return savedClicks !== null
      ? JSON.parse(savedClicks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const reset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positive = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={reset}
        total={totalFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
