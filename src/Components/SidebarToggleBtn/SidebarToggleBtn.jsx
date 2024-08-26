import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Button } from "./style";

export default function SidebarToggleBtn({ toggleSidebar, isSidebarActive }) {
  return (
    <Button
      onClick={() => toggleSidebar(() => !isSidebarActive)}
      className={`${isSidebarActive ? "active" : ""}`}
    >
      {isSidebarActive ? <BiChevronLeft /> : <BiChevronRight />}
    </Button>
  );
}
