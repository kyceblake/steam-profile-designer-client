import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  && svg {
    position: absolute;
    left: 5px;
    top: 6px;
  }

  && input {
    background: #393d43;
    border-radius: 5px;
    border: 0;
    outline: none;
    height: 28px;
    width: 100%;
    color: #c5cbd8;
    padding-left: 28px;
    box-sizing: border-box;
    font-style: italic;
  }
`;
