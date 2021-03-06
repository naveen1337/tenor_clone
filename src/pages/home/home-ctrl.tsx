import { getFeaturedRemote, searchSuggestionRemote } from "@remote/app-remote";
import React, { useState } from "react";
import { useQuery } from "react-query";

export const HomeContext = React.createContext<any>(null);

export function useHomeLocalState() {
  const [keyword, setkeyWord] = useState("");
  return {
    keyword,
    setkeyWord,
  };
}

export const useFeauturedGifsReq = () => {
  const {
    data: featured,
    isLoading: featured_l,
    isError: featured_e,
  } = useQuery(["featured"], getFeaturedRemote, {
    notifyOnChangeProps: ["data", "isLoading", "isError"],
    staleTime: 60 * 1000,
  });

  return { featured, featured_l, featured_e };
};

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
