import { useState } from "react";
import css from "./Options.module.css";
import Feedback from "../Feedback/Feedback";

const Options = () => {
  return (
    <div>
      <ul className={css.btnList}>
        <li>
          <button type="button">Good</button>
        </li>
        <li>
          <button type="button">Neutral</button>
        </li>
        <li>
          <button type="button">Bad</button>
        </li>
        <li>
          <button type="button">Rest</button>
        </li>
      </ul>
    </div>
  );
};

export default Options;
