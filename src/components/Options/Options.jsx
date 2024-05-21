import css from "./Options.module.css";

const Options = ({ onClick, state }) => {
  return (
    <div>
      {state.map((el) => (
        <button
          className={css.btn}
          type="button"
          onClick={() => onClick(el)}
          key={el}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
export default Options;
