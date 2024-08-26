import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1;
  background-color: #171d25;
  position: absolute;
  color: #fff;
  white-space: nowrap;

  display: flex;
  flex-flow: column;
  justify-content: space-between;

  transition: 0.5s ease;
  overflow-x: hidden;

  width: 0;
  padding: 12px 0;
  height: 100%;

  &&.open {
    width: 50%;
    padding: 12px;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000004d;
  z-index: -1;
  transition: opacity 0.5s ease;
  opacity: 0;

  &&.open {
    opacity: 1;
    z-index: 1;
    transition: opacity 0.5s ease;
    cursor: pointer;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;

  && .buttons {
    display: flex;
    flex-flow: column;
    gap: 8px;
  }
`;
