import { useDispatch, useSelector } from "react-redux";
import { getOpenState, setOpen } from "../../redux/slices/sidebarSlice";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import s from "./BtnSidebarToggle.module.css";

function BtnSidebarToggle() {
  const dispatch = useDispatch();
  const isOpen = useSelector(getOpenState);

  return (
    <div
      onClick={() => dispatch(setOpen())}
      className={`${s.BtnSidebarToggle} ${isOpen ? s.active : ""}`}
    >
      {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </div>
  );
}

export default BtnSidebarToggle;
