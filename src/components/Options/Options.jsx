import { useState } from "react";
import css from "./Options.module.css";

const Options = () => {
  const [counter, setCounter] = useState(0);
  const handeleClick = () => {
    setCounter(counter + 1);
  };
  console.log("counter", counter);
  return (
    <div>
      <ul className={css.btnList}>
        <li>
          <button type="button" onClick={handeleClick}>
            Good
          </button>
        </li>
        {/* <li>
          <button type="button" onClick={handeleClick}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={handeleClick}>
            Bad
          </button>
        </li>
        <li>
          <button type="button">Rest</button>
        </li> */}
      </ul>
    </div>
  );
};

export default Options;
