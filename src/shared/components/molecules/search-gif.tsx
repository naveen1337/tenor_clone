import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SeachIcon from "../../../assets/icons/clock-icon";

interface PropTypes {
  data?: any;
}

export default function SearchGif(props: PropTypes) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-start p-2 bg-white rounded">
      <input
        type="text"
        placeholder="search gifs"
        className="p-1 flex-grow outline-none focus:none"
      />
      <button>
        <SeachIcon />
      </button>
    </div>
  );
}
