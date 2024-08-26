import { Wrapper } from "./style";

export default function SidebarEntry({
  id,
  title,
  submenus,
  activeId,
  handleClick,
}) {
  return (
    <Wrapper>
      <a
        className={activeId == id ? "active" : ""}
        onClick={() => handleClick(id)}
      >
        {title}
      </a>
      {submenus && (
        <ul>
          {submenus.map((subentry, i) => (
            <SidebarEntry
              key={subentry.id}
              id={subentry.id}
              title={subentry.title}
              activeId={activeId}
              handleClick={handleClick}
            />
          ))}
        </ul>
      )}
    </Wrapper>
  );
}
