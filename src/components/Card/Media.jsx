import styled from "styled-components";

const Wrapper = styled.div`
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

export default function Media({ appid, type, meta }) {
  let url =
    "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items"; // appid/meta.CONTENT

  const parseBackgroundType = (meta) => {
    if (meta.animated) {
      return (
        <video
          playsInline
          loop
          autoPlay
          src={`${url}/${appid}/${meta.item_movie_webm_small}`}
        />
      );
    }
    return <img src={`${url}/${appid}/${meta.item_image_large}`} />;
  };

  const showByType = () => {
    switch (type) {
      case 3:
        return <>{parseBackgroundType(meta)}</>;
      case 14:
      case 15:
        return <img src={`${url}/${appid}/${meta.item_image_small}`} />;
      case 8:
        return <p>Profile</p>;
      default:
        return <p>Unknown</p>;
    }
  };

  return <Wrapper>{showByType()}</Wrapper>;
}
