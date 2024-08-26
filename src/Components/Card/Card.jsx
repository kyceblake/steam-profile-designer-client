import SteamCoin from "../../Assets/SteamCoin";

import {
  Wrapper,
  Illustration,
  Metadata,
  Title,
  Category,
  Price,
} from "./style";

function Card({ appid, type, title, price, url, isVideo, innerRef, style }) {
  // TODO: parse postre for video
  return (
    <Wrapper ref={innerRef} style={style}>
      <Illustration>
        {isVideo ? (
          <video
            preload="none"
            playsInline
            loop
            autoPlay
            disablePictureInPicture
            src={url}
          />
        ) : (
          <img loading="lazy" decoding="async" src={url} />
        )}
      </Illustration>

      <Metadata>
        <Title>{title}</Title>
        <Category>{type}</Category>
        <Price>
          <SteamCoin width={18} />
          {price}
        </Price>
      </Metadata>
    </Wrapper>
  );
}

export default Card;
