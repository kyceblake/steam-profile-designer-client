import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  z-index: 10;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 2px;
  top: 40%;
  border-radius: 0% 30% 30% 0%;
  transition: transform 0.5s ease, background-color 0.1s ease-in-out;

  &&:hover {
    background-color: #66c0f4;
    cursor: pointer;
  }

  &&.active {
    transform: translateX(1000%);
  }
`;
