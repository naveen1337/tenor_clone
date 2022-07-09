import { PageHeader } from "@components";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  children: React.ReactNode;
}

export default function MainLayout(props: PropTypes) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <PageHeader />
      <div>{props.children}</div>
      <div className="mt-4 py-4 bg-primary">
        <p className="text-xs uppercase text-center text-white">made by Sofia-2022</p>
      </div>
    </div>
  );
}
