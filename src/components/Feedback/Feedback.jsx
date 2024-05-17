import css from "./Feddback.module.css";

const Feedback = () => {
  return (
    <div>
      <ul className={css.listFeedback}>
        <li className={css.feedback}>Good: {}</li>
        <li className={css.feedback}>Natural: {}</li>
        <li className={css.feedback}>Bad: {}</li>
        <li className={css.feedback}>Total: {}</li>
        <li className={css.feedback}>Positive: {}</li>
      </ul>
    </div>
  );
};

export default Feedback;
