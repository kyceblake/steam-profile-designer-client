/* eslint-disable react/display-name */
import { useState, forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { VirtuosoGrid } from "react-virtuoso";
import Card from "../../Components/Card/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchItems, selectItems } from "../../Redux/Slices/itemsSlice";

const gridComponents = {
  List: forwardRef(({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "26px",
        ...style,
      }}
    >
      {children}
    </div>
  )),
  Item: ({ children, ...props }) => (
    <div
      {...props}
      style={{
        margin: "2px",
        // padding: "0.5rem",
        // display: "flex",
        // flex: "none",
        // height: "240px",
        // width: "170px",
        // alignContent: "stretch",
        // boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  ),
};

const ItemWrapper = ({ children, ...props }) => (
  <div
    ref={props.innerRef}
    style={{
      display: "flex",
      flex: 1,
      // border: "1px solid gray",
    }}
  >
    {children}
  </div>
);

function Catalogue() {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector(selectItems);
  const items = data.items;
  const loadMoreItems = async () => {
    setLoading(true);
    await dispatch(
      fetchItems({
        page: page,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    loadMoreItems();
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  return (
    <>
      <div className="scroll">
        <VirtuosoGrid
          style={loading ? { height: 400 } : { height: 448 }}
          totalCount={items.length}
          components={gridComponents}
          itemContent={(index) => (
            <ItemWrapper innerRef={items.length === index + 1 ? ref : null}>
              <Card
                title={items[index].title}
                appid={items[index].appid}
                defid={items[index].defid}
                type={items[index].type}
                price={items[index].price}
                url={`${items[index].urls.baseUrl}/${items[index].appid}/${
                  items[index].urls.small || items[index].urls.big
                }`}
                isVideo={items[index].urls.isVideo}
                onClick={() => {}}
                style={{ width: "170px", height: "240px" }}
              />
            </ItemWrapper>
          )}
        />
        {loading && <h1 style={{ textAlign: "center" }}>LOADING</h1>}
      </div>
    </>
  );
}

export default Catalogue;
