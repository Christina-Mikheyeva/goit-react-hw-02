import css from "./Options.module.css";

const Options = ({ updateFeedback, state }) => {
  return (
    <div>
      {state.map((el) => (
        <button
          className={css.btn}
          type="button"
          onClick={() => updateFeedback(el)}
          key={el}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
