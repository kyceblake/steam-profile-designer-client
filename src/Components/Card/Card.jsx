import SteamCoin from "../../Assets/SteamCoin";

import {
  Wrapper,
  Illustration,
  Metadata,
  Title,
  Category,
  Price,
} from "./style";

function Card({
  appid,
  defid,
  type,
  title,
  price,
  url,
  isVideo,
  innerRef,
  style,
  onClick,
}) {
  // TODO: poster for video?
  return (
    <Wrapper ref={innerRef} style={style} onClick={() => onClick(appid, defid)}>
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
