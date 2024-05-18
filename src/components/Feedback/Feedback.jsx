import css from "./Feddback.module.css";

const Feedback = (state) => {
  return (
    <div>
      <ul className={css.listFeedback}>
        <li className={css.feedback}>Good: {state.good}</li>
        <li className={css.feedback}>Natural: {state.natural}</li>
        <li className={css.feedback}>Bad: {state.bad}</li>
        {/* <li className={css.feedback}>Total: {}</li>
        <li className={css.feedback}>Positive: {}</li> */}
      </ul>
    </div>
  );
};

export default Feedback;
