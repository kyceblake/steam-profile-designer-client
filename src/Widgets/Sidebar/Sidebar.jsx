import { useState } from "react";

import ApplyResetButton from "../../Components/SidebarApplyResetBtn/SidebarApplyResetBtn";
import Entry from "../../Components/SidebarEntry/SidebarEntry";
import SidebarToggleBtn from "../../Components/SidebarToggleBtn/SidebarToggleBtn";

import { Wrapper, Bottom } from "./Styles";
import { BiRevision, BiSolidInjection } from "react-icons/bi";

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

/*
  TODO:
  - ApplyResetButton effects
  - Move search bar in sidebar maybe?
*/
export default function Sidebar() {
  const [isSidebarActive, toggleSidebar] = useState(true);
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  return (
    <>
      <Wrapper className={`${isSidebarActive ? "open" : ""}`}>
        <ul>
          {categories.map((entry) => (
            <Entry
              key={entry.id}
              id={entry.id}
              title={entry.title}
              submenus={entry.submenus}
              activeId={activeCategoryId}
              handleClick={setActiveCategoryId}
            />
          ))}
        </ul>
        <Bottom>
          <div className="buttons">
            <ApplyResetButton
              title="Reset items"
              icon={<BiRevision />}
              color="#BF4F74"
            />
            <ApplyResetButton title="Apply items" icon={<BiSolidInjection />} />
          </div>
        </Bottom>
      </Wrapper>
      <SidebarToggleBtn
        toggleSidebar={toggleSidebar}
        isSidebarActive={isSidebarActive}
      />
    </>
  );
}
