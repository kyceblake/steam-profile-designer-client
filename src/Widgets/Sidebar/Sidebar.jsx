import { useState } from "react";

import ApplyResetButton from "../../Components/SidebarApplyResetBtn/SidebarApplyResetBtn";
import Entry from "../../Components/SidebarEntry/SidebarEntry";
import SidebarToggleBtn from "../../Components/SidebarToggleBtn/SidebarToggleBtn";

import { Wrapper, Bottom, Background } from "./Styles";
import { BiRevision, BiSolidInjection } from "react-icons/bi";

export default function Sidebar({ categories }) {
  const [isSidebarActive, toggleSidebar] = useState(true);
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  // TODO: don't forget to close sidebar when search input activates
  return (
    <>
      <Background
        className={`${isSidebarActive ? "open" : ""}`}
        onClick={() => toggleSidebar((e) => !e)}
      />
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
