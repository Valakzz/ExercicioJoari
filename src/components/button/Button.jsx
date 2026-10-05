import { useState } from "react";
import "./Button.css";

export default function Button(props) {
  const [countLikes, setCountLikes] = useState(0);

  function count() {
    setCountLikes(countLikes + 1);
  }

  return (
    <div className="btn">
      <button onClick={count}>
        <img src={props.status} />
      </button>
      {props.color == "G" ? (
        <span className="green">{countLikes}</span>
      ) : (
        <span className="red">{countLikes}</span>
      )}

      
    </div>

  );

   
}
