import BtnSidebarToggle from "../../components/BtnSidebarToggle/BtnSidebarToggle";
import Catalogue from "../../components/Catalogue/Catalogue";
import Sidebar from "../../components/Sidebar/Sidebar";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={s.HomePage}>
      <Sidebar />
      <BtnSidebarToggle />
      <Catalogue />
    </div>
  );
}
