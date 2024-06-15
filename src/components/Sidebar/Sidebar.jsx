import { useSelector } from "react-redux";
import { getCategories } from "../../redux/slices/categorySlice";
import { getOpenState } from "../../redux/slices/sidebarSlice";
import { BiRevision, BiSolidInjection } from "react-icons/bi";
import styled from "styled-components";
import Button from "./Button";
import Entry from "./Entry";
import ActiveItems from "./ActiveItems";

const Wrapper = styled.div`
  z-index: 1;
  background-color: #171d25;
  position: relative;
  color: #fff;
  white-space: nowrap;

  display: flex;
  flex-flow: column;
  justify-content: space-between;

  transition: 0.5s ease;
  overflow-x: hidden;

  width: 0;
  padding: 12px 0;
  height: 100%;

  &&.open {
    width: 34%;
    padding: 12px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;

  && .buttons {
    display: flex;
    flex-flow: column;
    gap: 8px;
  }
`;

export default function Sidebar() {
  const categories = useSelector(getCategories);
  const isOpen = useSelector(getOpenState);

  return (
    <Wrapper className={`${isOpen ? "open" : ""}`}>
      <ul>
        {categories.map((entry, i) => (
          <Entry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            submenus={entry.submenus}
          />
        ))}
      </ul>
      <Bottom>
        <ActiveItems />
        <div className="buttons">
          <Button title="Reset items" icon={<BiRevision />} color="#BF4F74" />
          <Button title="Apply items" icon={<BiSolidInjection />} />
        </div>
      </Bottom>
    </Wrapper>
  );
}
