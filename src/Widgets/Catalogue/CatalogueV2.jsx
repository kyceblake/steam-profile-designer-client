import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Card from "../../Components/Card/Card";
import { Loading, Wrapper } from "./style";
import VirtualGrid from "../../Components/VirtualGrid/VirtualGrid";

const Loader = () => <Loading>⏳ Loading...</Loading>;

export default function Catalogue({
  loadMore,
  currentPage,
  items,
  hasMore,
  status,
  onItemClick,
}) {
  const { ref, inView } = useInView();

  useEffect(() => {
    window.history.scrollRestoration = "manual"; // bring to top on render
    loadMore(currentPage);
  }, []);

  useEffect(() => {
    if (inView) {
      loadMore(currentPage + 1);
    }
  }, [inView]);

  return (
    <Wrapper>
      {/*items.map((i, index) => {
        const src = i.urls.small || i.urls.big; // sometimes only one exists (games fault)
        return (
          <Card
            innerRef={items.length === index + 1 ? ref : null}
            key={[i.appid, i.defid].join("")}
            appid={i.appid}
            defid={i.defid}
            type={i.type}
            title={i.title}
            price={i.price}
            url={`${i.urls.baseUrl}/${i.appid}/${src}`}
            isVideo={i.urls.isVideo}
            onClick={onItemClick}
            style={{ width: "170px", height: "240px" }}
          />
        );
      })*/}
      <VirtualGrid
        numItems={items.length}
        itemHeight={240}
        windowHeight={448}
        renderItem={({ index, style }) => {
          const i = items[index];
          console.log(items);
          return (
            <Card
              key={[i.appid, i.defid].join("")}
              style={{ width: "170px", height: "240px" }}
            />
          );
        }}
      />
      {status === "pending" && <Loader />}
      {!hasMore && <p>No more items</p>}
    </Wrapper>
  );
}
