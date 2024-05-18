import css from "./Options.module.css";

const Options = ({ updateFeedback, children }) => {
  return (
    <div>
      <button className={css.btn} type="button" onClick={updateFeedback}>
        {children}
      </button>
    </div>
  );
};

export default Options;
