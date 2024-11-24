import styled from "styled-components";

// TODO: nest styling with Card
const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 170px;
  height: 240px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: #1b2f4a;
  border-radius: 5px;
`;

const Header = styled.div`
  background: linear-gradient(
    144.37deg,
    rgba(130, 156, 219, 0) 68.22%,
    rgba(82, 125, 235, 0.32) 113.95%
  );
  flex-basis: 70%;
`;

const Body = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.11) 100%
  );
`;

function CardPlaceholder() {
  return (
    <Wrapper>
      <Header />
      <Body></Body>
    </Wrapper>
  );
}

export default CardPlaceholder;
