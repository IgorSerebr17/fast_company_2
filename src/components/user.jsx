/** @format */

import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const User = (props) => {
  const getBageClasses = (color) => {
    let classes = "";
    classes += color === "primary" ? "badge bg-primary" : "";
    classes += color === "secondary" ? "badge bg-secondary" : "";
    classes += color === "success" ? "badge bg-success" : "";
    classes += color === "danger" ? "badge bg-danger" : "";
    classes += color === "info" ? "badge bg-info text-dark" : "";
    classes += color === "dark" ? "badge bg-dark" : "";
    return classes;
  };

  return (
    <tr key={props._id}>
      <td>{props.name}</td>
      <td>
        <Qualitie onGetBageClasses={getBageClasses} {...props} />
      </td>
      <td>{props.profession.name}</td>
      <td>{props.completedMeetings}</td>
      <td>
        <BookMark />
      </td>
      <td>{props.rate + "/5"}</td>
      <td></td>
      <td>
        <button
          className={getBageClasses("danger")}
          onClick={() => props.onDeletePerson(props._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
