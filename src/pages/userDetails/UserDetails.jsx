import { useSearchParams } from "react-router-dom";
import "./UserDetails.css";

export default function UserDetails() {
  const [params] = useSearchParams();

  const name = params.get("name");
  const img = params.get("img");

  return (
    <div>
      <h1>{name}</h1>
      <img src={img} />
    </div>
  );
}
