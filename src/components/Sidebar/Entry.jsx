import { useDispatch } from "react-redux";
import {
  getActiveCategory,
  setActiveCategory,
} from "../../redux/slices/categorySlice";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.li`
  a {
    cursor: pointer;
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: 0.075em;
    text-transform: uppercase;

    -webkit-user-select: none;
    user-select: none;
  }

  a.active {
    color: #1999ff;
    transition: 0.5s;
    font-weight: 600;
  }

  ul > li {
    padding: 0 8px;
  }
`;

export default function Entry({ id, title, submenus, className }) {
  const dispatch = useDispatch();
  const activeId = useSelector(getActiveCategory);

  const handleClick = () => {
    dispatch(setActiveCategory(id));
  };

  return (
    <Wrapper>
      <a
        className={activeId == id ? "active" : ""}
        onClick={() => handleClick()}
      >
        {title}
      </a>
      {submenus && (
        <ul>
          {submenus.map((subentry, i) => (
            <Entry key={subentry.id} id={subentry.id} title={subentry.title} />
          ))}
        </ul>
      )}
    </Wrapper>
  );
}
