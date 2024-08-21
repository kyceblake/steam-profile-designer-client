import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #1e232e;
  z-index: 2;
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
`;

export const Title = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  user-select: none;

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
