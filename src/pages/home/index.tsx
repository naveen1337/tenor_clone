import { searchRemote } from "@remote/app-remote";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  useHomeLocalState,
  HomeContext,
  useFeauturedGifsReq,
  useSearchSuggestReq,
} from "./home-ctrl";
import HomePageUI from "./home-page";

export default function HomePageHOC() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { keyword, setkeyWord } = useHomeLocalState();

  const { featured_l, featured, featured_e } = useFeauturedGifsReq();
  const { suggestions, suggestions_l } = useSearchSuggestReq(keyword);

  function searchSubmit(event: any) {
    if ((event.key === "Enter" || event === "origin") && keyword.length > 0) {
      navigate(`/search?q=${keyword}`);
    }
  }

  const ctx = {
    featured,
    keyword,
    suggestions,
    setkeyWord,
    searchSubmit,
  };

  return (
    <HomeContext.Provider value={ctx}>
      <HomePageUI
        pageLoading={featured_l}
        pageError={featured_e}
        pageSpinner={false}
      />
    </HomeContext.Provider>
  );
}
