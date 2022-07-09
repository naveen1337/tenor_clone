import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  text: string;
}

export default function Subtitle(props: PropTypes) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="py-4">
      <h2>{props.text}</h2>
    </div>
  );
}
