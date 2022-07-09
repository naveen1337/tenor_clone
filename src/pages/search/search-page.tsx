import { GifBox, MainLayout, PageUIStatus } from "@components";
import { PageProps } from "@types/app";
import { useContext, useRef } from "react";

import { SearchContext } from "./search-ctrl";
import SeachGif from "./components/search-bar";
import HomeSubtitle from "./components/subtitle";

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
        <SeachGif
          keyword={ctx.keyword}
          setkeyWord={ctx.setkeyWord}
          suggestions={ctx.suggestions}
          submit={ctx.searchSubmit}
        />
        <div className="px-24">
          <div>
            <HomeSubtitle text={` Gifs`} />
            <div className="columns-5 gap-2 break-inside-avoid-column">
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
