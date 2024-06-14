import SparklesIcon from "../../assets/SparklesIcon";
import SearchInput from "../SearchInput/SearchInput";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1e232e;
  z-index: 2;
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
`;

const Title = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;

  && .text {
    font-weight: 900;
    text-transform: uppercase;
    padding-left: 23px;
  }

  && .icon {
    width: 40px;
    position: absolute;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Title>
        <SparklesIcon className="icon" />
        <div className="text"> The Points Shop </div>
      </Title>

      <SearchInput debounceDelay={500} />
    </Wrapper>
  );
}
