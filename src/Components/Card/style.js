import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 100%;

  cursor: pointer;

  border-radius: 5px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.$selected
      ? css`
          background: linear-gradient(
            180deg,
            rgba(6, 191, 255, 1) 0%,
            rgba(43, 116, 255, 1) 100%
          );
        `
      : css`
          background: rgba(76, 112, 168, 0.25);
        `}

  /* artifacts on mozilla */
  backdrop-filter: blur(20px) saturate(180%) brightness(60%);
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0, 0.73, 0.48, 1);
  transition-property: box-shadow, transform, filter;

  &&:hover {
    filter: brightness(1.2) contrast(0.95) saturate(1);
    box-shadow: 3px 8px 8px 3px rgba(0, 0, 0, 0.596);
  }

  &&:hover img,
  &&:hover video {
    transform: scale(1.3);
  }
`;

export const Illustration = styled.div`
  display: flex;
  flex-basis: 70%;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    144.37deg,
    rgba(130, 156, 219, 0) 68.22%,
    rgba(82, 125, 235, 0.32) 113.95%
  );

  img,
  video {
    max-width: 70%;
    height: auto;
    border-radius: 3px;

    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0, 0.73, 0.48, 1);
    transition-property: transform;
    transform-origin: 50% 50%;
    transition-property: transform, filter;
  }
`;
export const Metadata = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 6px 12px;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.11) 100%
  );
`;

export const Text = styled.div`
  gap: 10px;
  display: inline-flex;
  align-items: center;

  font-size: 0.85rem;
  letter-spacing: 0.05em;
  font-weight: 400;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.2rem;
`;

export const Title = styled(Text)`
  background-image: linear-gradient(90deg, #c5cbd8 70%, rgba(0, 0, 0, 0));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Category = styled(Text)`
  opacity: 0.5;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
`;

export const Price = styled(Text)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 10px;
  gap: 4px;
`;
