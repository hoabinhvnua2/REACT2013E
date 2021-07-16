import React, { useState } from "react";
import PropTypes from "prop-types";

TodoFrom.propTypes = {
  onsubmit: PropTypes.func,
};

TodoFrom.defaultProps = {
  onsubmit: null,
};

function TodoFrom(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValue(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;

    const fromValue = {
      title: value,
    };
    onSubmit(fromValue);

    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValue} />
    </form>
  );
}

export default TodoFrom;
