/* eslint-disable react/display-name */
import { useState, forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { VirtuosoGrid } from "react-virtuoso";
import Card from "../../Components/Card/Card";

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
        padding: "0.5rem",
        display: "flex",
        flex: "none",
        height: "240px",
        width: "170px",
        alignContent: "stretch",
        boxSizing: "border-box",
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
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (page, limit) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();
    return data;
  };

  const loadMorePosts = async () => {
    setLoading(true);
    const newPosts = await fetchPosts(page, 10);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLoading(false);
  };

  useEffect(() => {
    loadMorePosts();
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
          totalCount={posts.length}
          components={gridComponents}
          itemContent={(index) => (
            <ItemWrapper innerRef={posts.length === index + 1 ? ref : null}>
              {/* <h1>{posts[index].id}</h1> {posts[index].title} */}
              {console.log(posts)}
              <Card />
            </ItemWrapper>
          )}
        />
        {loading && <h1>LOADING</h1>}
      </div>
    </>
  );
}

export default Catalogue;
