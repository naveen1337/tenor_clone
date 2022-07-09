import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

interface PropTypes {
  data?: any;
}

export default function PageHeader(props: PropTypes) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center p-3">
      <NavLink to="/">
        <p className="font-bold text-3xl">tenor</p>
      </NavLink>
      <button className="bg-primary px-8 py-2 rounded text-white font-white text-base">
        Sign in
      </button>
    </div>
  );
}
