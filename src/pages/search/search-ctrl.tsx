import { getFeaturedRemote, searchSuggestionRemote } from "@remote/app-remote";
import React, { useState } from "react";
import { useQuery } from "react-query";

export const SearchContext = React.createContext<any>(null);

export function useSearchLocalState() {
  const [isNew, setIsNew] = useState<any>(true);
  const [keyword, setkeyWord] = useState<any>("");
  return {
    isNew,
    setIsNew,
    keyword,
    setkeyWord,
  };
}

export const useSearchSuggestReq = (keyword?: string) => {
  const {
    data: suggestions,
    isLoading: suggestions_l,
    isError: suggestions_e,
  } = useQuery(["suggestion", keyword], searchSuggestionRemote, {
    notifyOnChangeProps: ["data", "isLoading", "isError"],
    staleTime: 60 * 1000,
    enabled: !!keyword,
  });

  return { suggestions, suggestions_l, suggestions_e };
};
