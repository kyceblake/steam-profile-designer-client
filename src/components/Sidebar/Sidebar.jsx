import { useSelector, useDispatch } from "react-redux";
import {
  getActiveCategory,
  getCategories,
  setActiveCategory,
} from "../../redux/slices/categorySlice";
import { getOpenState } from "../../redux/slices/sidebarSlice";
import s from "./Sidebar.module.css";

function Entry({ id, title, submenus, className }) {
  const dispatch = useDispatch();
  const activeId = useSelector(getActiveCategory);

  const handleClick = () => {
    dispatch(setActiveCategory(id));
  };

  return (
    <li className={className}>
      <a
        className={activeId == id ? s.active : ""}
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
    </li>
  );
}

export default function Sidebar() {
  const categories = useSelector(getCategories);
  const isOpen = useSelector(getOpenState);

  return (
    <div className={`${s.Sidebar} ${isOpen ? s.open : ""}`}>
      <ul>
        {categories.map((entry, i) => (
          <Entry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            className={s.Entry}
            submenus={entry.submenus}
          />
        ))}
      </ul>
    </div>
  );
}
