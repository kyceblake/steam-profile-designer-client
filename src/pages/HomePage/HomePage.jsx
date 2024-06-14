import styled from "styled-components";
import BtnSidebarToggle from "../../components/BtnSidebarToggle/BtnSidebarToggle";
import Catalogue from "../../components/Catalogue/Catalogue";
import Sidebar from "../../components/Sidebar/Sidebar";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Sidebar />
      <BtnSidebarToggle />
      <Catalogue />
    </Wrapper>
  );
}
