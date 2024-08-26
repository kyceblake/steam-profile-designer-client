import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useSelector, useDispatch } from "react-redux";
import { fetchItems, selectItems } from "../../Redux/Slices/itemsSlice";

import Card from "../../Components/Card/Card";
import { Loading, Wrapper } from "./style";

const Loader = () => <Loading>⏳ Loading...</Loading>;

export default function Catalogue() {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  const data = useSelector(selectItems);

  const loadMoreItems = async (page) => {
    if (data.hasMore) {
      dispatch(
        fetchItems({
          page: page,
        })
      );
    }
  };

  useEffect(() => {
    loadMoreItems(data.page);
  }, []);

  useEffect(() => {
    if (inView) {
      loadMoreItems(data.page + 1);
    }
  }, [inView]);

  return (
    <Wrapper>
      {data.items.map((i, index) => {
        const src = i.urls.small || i.urls.big; // sometimes only one exists (games fault)

        return (
          <Card
            innerRef={data.items.length === index + 1 ? ref : null}
            key={[i.appid, i.defid].join("")}
            appid={i.appid}
            type={i.type}
            title={i.title}
            price={i.price}
            url={`${i.urls.baseUrl}/${i.appid}/${src}`}
            isVideo={i.urls.isVideo}
          />
        );
      })}
      {data.status === "pending" && <Loader />}
      {!data.hasMore && <p>No more items</p>}
    </Wrapper>
  );
}
