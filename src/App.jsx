import Catalogue from "./Widgets/Catalogue/Catalogue";
import Header from "./Widgets/Header/Header";
import Sidebar from "./Widgets/Sidebar/Sidebar";

import "./theme.css";

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
