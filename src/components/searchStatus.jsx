/** @format */

import React from "react";

const SearchStatus = (props) => {
  return (
    <span className={props.onGetBageClassesToString(props.users.length)}>
      {props.onCreateString(props.users.length)}
    </span>
  );
};

export default SearchStatus;
