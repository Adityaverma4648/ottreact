import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const Input = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState("");

  return (
    <input
      type="text"
      className={`outline-none select-none px-1 py-2 rounded-sm` + props.className}
      onChange={(e) => {
        setText(e.target.value);
      }}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
