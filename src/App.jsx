import Catalogue from "./Widgets/Catalogue/Catalogue";
import Header from "./Widgets/Header/Header";
import Sidebar from "./Widgets/Sidebar/Sidebar";
import "./theme.css";

function App() {
  return (
    <>
      <Header />
      <div className="Outlet">
        <Sidebar />
        <Catalogue />
      </div>
    </>
  );
}

export default App;
