import { useDispatch } from "react-redux";
import Catalogue from "./Widgets/CatalogueV2/CatalogueV2";
import Header from "./Widgets/Header/Header";
import Sidebar from "./Widgets/Sidebar/Sidebar";

import "./theme.css";
import {
  fetchItems,
  selectItems,
  toggleActiveItem,
} from "./Redux/Slices/itemsSlice";
import { useSelector } from "react-redux";

const categories = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 1,
    title: "Backgrounds",
    submenus: [
      { id: 10, title: "Animated" },
      { id: 11, title: "Static" },
    ],
  },
  { id: 2, title: "Frames" },
  { id: 3, title: "Avatars" },
  { id: 4, title: "Special profiles" },
];

function App() {
  return (
    <>
      <Header />
      <div className="Outlet">
        <Sidebar categories={categories} />
        <Catalogue />
      </div>
    </>
  );
}

export default App;
