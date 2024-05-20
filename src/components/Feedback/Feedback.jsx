import css from "./Feddback.module.css";

const Feedback = ({ good, bad, natural }) => {
  return (
    <div>
      <ul className={css.listFeedback}>
        <li className={css.feedback}>Good: {good}</li>
        <li className={css.feedback}>Natural: {natural}</li>
        <li className={css.feedback}>Bad: {bad}</li>
        {/* <li className={css.feedback}>Total: {}</li>
        <li className={css.feedback}>Positive: {}</li> */}
      </ul>
    </div>
  );
};

export default Feedback;
