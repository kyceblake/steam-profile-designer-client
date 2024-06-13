import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems, selectItems } from "../../redux/slices/itemsSlice";
import { getActiveCategory } from "../../redux/slices/categorySlice";
import Card from "../Card/Card";

import s from "./Catalogue.module.css";

function List({ items }) {
  return items.map((item) => {
    return <Card key={item.appid + item.defid} item={item} />;
  });
}

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

  const getData = () => {
    switch (status) {
      case "loading":
        return <h1>LOADING</h1>;
      case "error":
        return <h1>ERROR</h1>;
      default:
        return totalPages == 0 ? <h1>EMPTY </h1> : <List items={items} />;
    }
  };

  return <div className={s.Catalogue}>{getData()}</div>;
}
