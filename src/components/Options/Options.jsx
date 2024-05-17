import { useState } from "react";
import css from "./Options.module.css";

const Options = () => {
  const [click, setClick] = useState(0);
  const handelClick = (id) => {
    setClick(click + 1);
    console.log("click", id);
  };
  return (
    <div>
      <ul className={css.btnList}>
        <li>
          <button type="button" onClick={() => handelClick(1)}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handelClick(2)}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handelClick(3)}>
            Bad
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handelClick(4)}>
            Rest
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Options;
