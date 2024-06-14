import { useDispatch, useSelector } from "react-redux";
import { getOpenState, setOpen } from "../../redux/slices/sidebarSlice";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  z-index: 10;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 2px;
  top: 40%;
  border-radius: 0% 30% 30% 0%;
  transition: transform 0.5s ease, background-color 0.1s ease-in-out;

  &&:hover {
    background-color: #66c0f4;
  }

  &&.active {
    transform: translateX(1031%);
  }
`;

export default function BtnSidebarToggle() {
  const dispatch = useDispatch();
  const isOpen = useSelector(getOpenState);

  return (
    <Button
      onClick={() => dispatch(setOpen())}
      className={`${isOpen ? "active" : ""}`}
    >
      {isOpen ? <BiChevronLeft /> : <BiChevronRight />}
    </Button>
  );
}
