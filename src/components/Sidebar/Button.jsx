import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
  font-size: 1.2rem;
  align-items: center;
  padding: 6px 8px;
  cursor: pointer;
  outline: 1px solid #78a9e2;
  border-radius: 5px;
  color: #78a9e2;

  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    rgba(120, 169, 226, 0.8) 50%,
    rgba(120, 169, 226, 0.8)
  );
  background-position: 100% 0;
  background-size: 200% 100%;
  transition-property: background-position, color, background-color;
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &&:hover {
    color: #fff;
    background-position: 0 0;
  }

  && svg {
    fill: none;
    fill: #78a9e2;

    transform: rotate(0deg);
    transition: transform 0.3s cubic-bezier(0.42, 0, 0.03, 1.25);
  }

  &&:hover svg {
    fill: #fff;
    transform: rotate(360deg);
  }
`;

export default function Button({ title, icon }) {
  return (
    <ButtonWrapper>
      {icon} {title}
    </ButtonWrapper>
  );
}
