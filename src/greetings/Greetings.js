import React from 'react';
import "./Greetings.css"

const Greetings = (props) => {
  let text = ""
  switch(props.lang) {
    case "de":
      text = "Hallo"
      break
    case "en":
      text = "Hello"
      break
    case "es":
      text = "Hola"
      break
    case "fr":
      text = "Bonjour"
      break
    default:
      text = "Hello"
      break
  }

  return (
    <div className="greetings">
      <p>{text} {props.children}</p>
    </div>
  );
};

export default Greetings;