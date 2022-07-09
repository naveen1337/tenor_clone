import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  id: string;
  gifurl: string;
}

export default function GifBox(props: PropTypes) {
  const navigate = useNavigate();
  return (
    <div className="">
      <img src={props.gifurl} alt={props.id} />
    </div>
  );
}
