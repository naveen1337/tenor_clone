import { isMounted } from "@hooks/app-hooks";
import { searchRemote } from "@remote/app-remote";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import {
  SearchContext,
  useSearchLocalState,
  useSearchSuggestReq,
} from "./search-ctrl";
import SearchPageUI from "./search-page";

export default function HomePageHOC() {
  const mounted = isMounted();
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { keyword, setkeyWord, setIsNew, isNew } = useSearchLocalState();

  const { suggestions, suggestions_l } = useSearchSuggestReq(keyword);

  useEffect(() => {
    if (isNew) {
      setIsNew(false);
      const query = params.get("q");
      setkeyWord(query);
      seach_req.mutate({ keyword:query });
    }
  }, [params]);

  const seach_req = useMutation(searchRemote, {
    onSuccess: (data) => {
      // console.log(data);
    },
    onError: (e) => {
      // console.log(e);
    },
  });

  function searchSubmit(event: any) {
    if ((event.key === "Enter" || event === "origin") && keyword.length > 1) {
      setParams(`q=${keyword}`);
      seach_req.mutate({ keyword });
    }
  }

  const ctx = {
    keyword,
    suggestions,
    results: seach_req.data,
    setkeyWord,
    searchSubmit,
  };
  return (
    <SearchContext.Provider value={ctx}>
      <SearchPageUI
        pageLoading={false}
        pageError={seach_req.isError}
        pageSpinner={false}
      />
    </SearchContext.Provider>
  );
}
