import {
  GifBox,
  MainLayout,
  PageUIStatus,
  Subtitle,
  SearchBar,
} from "@components";
import { PageProps } from "@types/app";
import { useContext, useRef } from "react";

import { SearchContext } from "./search-ctrl";

interface PropTypes extends PageProps {}

export default function SearchPageUI(props: PropTypes) {
  const ctx = useContext(SearchContext);

  if (props.pageLoading || !ctx) {
    return <PageUIStatus error={false} />;
  }
  if (props.pageError) {
    return <PageUIStatus error={true} />;
  }

  return (
    <MainLayout>
      <div className="">
        <SearchBar
          keyword={ctx.keyword}
          setkeyWord={ctx.setkeyWord}
          suggestions={ctx.suggestions}
          submit={ctx.searchSubmit}
        />
        <div className="px-4 md:px-24">
          <div>
            <Subtitle text={` Gifs`} />
            <div className="columns-2 md:columns-5  gap-2 break-inside-avoid-column">
              {ctx.results &&
                ctx.results.map((item: any) => {
                  return (
                    <div key={item.id} className="m-4 break-inside-avoid">
                      <GifBox id={item.id} gifurl={item.media[0].tinygif.url} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
