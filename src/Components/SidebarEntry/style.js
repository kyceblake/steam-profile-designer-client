import styled from "styled-components";

export const Wrapper = styled.li`
  a {
    cursor: pointer;
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: 0.075em;
    text-transform: uppercase;

    -webkit-user-select: none;
    user-select: none;
  }

  a:hover {
    color: #78a9e2;
    transition: 0.2s;
  }

  a.active {
    color: #1999ff;
    transition: 0.5s;
    font-weight: 600;
  }

  ul > li {
    padding: 0 8px;
  }
`;
