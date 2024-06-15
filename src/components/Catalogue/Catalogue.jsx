import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchItems, selectItems } from "../../redux/slices/itemsSlice";
import { getActiveCategory } from "../../redux/slices/categorySlice";

import Card from "../Card/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 12px;
  overflow: scroll;

  // TODO: there is a way to wrap infinite scroll component into styled
  .infinite-scroll-component {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 16px;
  }
`;

function Loading({ text }) {
  return (
    <p style={{ textAlign: "center", flexBasis: "100%" }}>
      <b>{text}</b>
    </p>
  );
}

export default function Catalogue() {
  const searchValue = useSelector((state) => state.search.value);
  const categoryId = useSelector(getActiveCategory);
  const dispatch = useDispatch();
  const { items, totalPages, currentPage, searchQuery, type, status } =
    useSelector(selectItems);

  const fetchMoreData = () => {
    dispatch(
      fetchItems({
        searchQuery: searchValue,
        currentPage: currentPage + 1,
        category: categoryId,
      })
    );
  };

  useEffect(() => {
    dispatch(
      fetchItems({
        searchQuery: searchValue,
        currentPage: 0,
        category: categoryId,
      })
    );
  }, [searchValue, categoryId]);

  // FIXME: currentPage is translated by human readable format
  // FIXME: error should return type of error
  const hasMore = () =>
    totalPages !== 0 && currentPage !== totalPages - 1 ? true : false;

  // FIXME: mvp time(code is trash, component and redux needs to be rewritten completely)
  return (
    <Wrapper id="scrollableDiv">
      {status == "error" ? (
        <Loading text="API server is down" />
      ) : (
        <InfiniteScroll
          dataLength={items?.length ? items.length : 0}
          next={fetchMoreData}
          hasMore={hasMore()}
          loader={<Loading text="Loading" />}
          scrollableTarget="scrollableDiv"
          endMessage={<Loading text="That's all..." />}
        >
          {items?.map((i, index, arr) => {
            return <Card key={i.appid + i.defid} item={i} />;
          })}
        </InfiniteScroll>
      )}
    </Wrapper>
  );
}
