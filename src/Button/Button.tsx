import React, { useState } from "react";
import "./Button.css";

interface BtnProps {
  text: string | number;
  handleClick?: Function;
}

const GenBtn = (props: BtnProps) => {
  let [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter++);
    props.handleClick!(counter);
  };
  return (
    <button className="default" onClick={() => handleClick()}>
      {props.text}
    </button>
  );
};

export default GenBtn;
