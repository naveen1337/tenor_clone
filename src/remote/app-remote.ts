import { setUserInLocalStorage } from "../shared/utils/app-utils";
import { API_KEY, BASE_URL } from "../constants/app";
import requestServer from "../helpers/request-server";

// paths
const get_ping_req = "";
const featured_req = "/categories?type=featured";
const search_suggestion_req = "/search_suggestions";
const search_req = "/search";
export const getFeaturedRemote = async (params: any) => {
  try {
    const url = BASE_URL + `${featured_req}&key=${API_KEY}`;
    const response = await requestServer("GET", url);
    if (response.status === 200) {
      return response.data.tags;
    }
    throw new Error("getFeaturedRemote() failed");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const searchRemote = async (payload: any) => {
  try {
    const url = BASE_URL + `${search_req}?q=${payload.keyword}&key=${API_KEY}`;
    const response = await requestServer("GET", url);
    if (response.status === 200) {
      return response.data.results;
    }
    throw new Error("searchRemote() failed");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const searchSuggestionRemote = async (params: any) => {
  try {
    const url =
      BASE_URL +
      `${search_suggestion_req}?${params.queryKey[1]}&key=${API_KEY}`;
    const response = await requestServer("GET", url);
    if (response.status === 200) {
      return response.data.results;
    }
    throw new Error("searchSuggestionRemote() failed");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
