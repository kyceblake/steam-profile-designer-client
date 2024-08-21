import Header from "./Widgets/Header/Header";
import Sidebar from "./Widgets/Sidebar/Sidebar";
import "./theme.css";

function App() {
  return (
    <>
      <Header />
      <div className="Outlet">
        <Sidebar />
        <h1>test</h1>
      </div>
    </>
  );
}

export default App;
