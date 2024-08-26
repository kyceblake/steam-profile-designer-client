import { Wrapper } from "./style";

export default function SidebarApplyResetBtn({ title, icon, color }) {
  return (
    <Wrapper $primary={color}>
      {icon} {title}
    </Wrapper>
  );
}
