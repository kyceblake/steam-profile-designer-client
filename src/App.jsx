import Catalogue from "./Widgets/Catalogue/Catalogue";
import Header from "./Widgets/Header/Header";
import Sidebar from "./Widgets/Sidebar/Sidebar";

import { fetchItems, selectItems } from "./Redux/Slices/itemsSlice";
import { useSelector, useDispatch } from "react-redux";

import "./theme.css";
import { useEffect, useState } from "react";
import ExampleWrapper from "./Widgets/Example";

function App() {
  const [state, setState] = useState({
    hasNextPage: true,
    isNextPageLoading: false,
    items: [],
  });

  const loadNextPage = () => {
    setTimeout(() => {
      setState({
        hasNextPage: state.items.length < 100,
        isNextPageLoading: false,
        items: [...state.items].concat(
          new Array(10).fill(true).map((_, i) => ({ name: i }))
        ),
      });
    }, 2500);
  };

  useEffect(() => {
    loadNextPage();
  }, []);

  return (
    <>
      <Header />
      <div className="Outlet">
        <Sidebar />
        <ExampleWrapper
          hasNextPage={state.hasNextPage}
          isNextPageLoading={state.isNextPageLoading}
          items={state.items}
          loadNextPage={loadNextPage}
        />
        {/* <Catalogue
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          items={items.items}
          loadNextPage={loadNextPage}
        /> */}
      </div>
    </>
  );
}

export default App;
