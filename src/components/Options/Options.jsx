import { useState } from "react";
import css from "./Options.module.css";

const Options = ({ value, handeleClick, children }) => {
  return (
    <div>
      <button className={css.btn} type="button" onClick={handeleClick}>
        {children}
      </button>
    </div>
  );
};

export default Options;
