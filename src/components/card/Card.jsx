import Button from "../button/Button";
import "./Card.css";
import likeImg from "../../assets/like.svg";
import dislikeImg from "../../assets/dislike.svg";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <img src={props.picture} />


         <input
        type="checkbox"
        checked={props.ativo}
        onChange={props.onToggle}
      />
        <span>{props.name}</span>
        <span>{props.age}</span>
        <Link to={`/userDetails?name=${props.name}&img=${props.picture}`}>Ver detalhes</Link>
        <div className="btn-container">
          <Button status={likeImg} color="G" />
          <Button status={dislikeImg} color="R" />
        </div>
       

        
      </div>
    </>
  );
}

export default Card;
