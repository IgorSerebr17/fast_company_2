/** @format */

import React from "react";

const Qualitie = (props) => {
  return (
    <span>
      {props.qualities.map((quality) => (
        <span
          key={quality._id}
          className={props.onGetBageClasses(quality.color)}
        >
          {quality.name}
        </span>
      ))}
    </span>
  );
};

export default Qualitie;
