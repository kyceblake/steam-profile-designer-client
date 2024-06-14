import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems, selectItems } from "../../redux/slices/itemsSlice";
import { getActiveCategory } from "../../redux/slices/categorySlice";

import Card from "../Card/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 12px;
  overflow: scroll;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 16px;
`;

export default function Catalogue() {
  const searchValue = useSelector((state) => state.search.value);
  const categoryId = useSelector(getActiveCategory);
  const dispatch = useDispatch();
  const { items, totalPages, type, status } = useSelector(selectItems);

  useEffect(() => {
    dispatch(
      fetchItems({
        searchQuery: searchValue,
        currentPage: 0,
        category: categoryId,
      })
    );
  }, [searchValue, categoryId]);

  const mapItems = () => {
    return items.map((item) => {
      return <Card key={item.appid + item.defid} item={item} />;
    });
  };

  const getData = () => {
    switch (status) {
      case "loading":
        return <h1>LOADING</h1>;
      case "error":
        return <h1>ERROR</h1>;
      default:
        return totalPages == 0 ? <h1>EMPTY </h1> : mapItems();
    }
  };

  return <Wrapper>{getData()}</Wrapper>;
}
