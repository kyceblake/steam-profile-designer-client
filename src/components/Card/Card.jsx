import React from "react";
import SteamCoin from "../../assets/SteamCoin";
import Media from "./Media";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;

  width: 170px;
  height: 240px;

  cursor: pointer;

  border-radius: 5px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  background: rgba(76, 112, 168, 0.25);

  /* artifacts on mozilla */
  backdrop-filter: blur(20px) saturate(180%) brightness(60%);
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0, 0.73, 0.48, 1);
  transition-property: box-shadow, transform, filter;

  &&:hover {
    /* transform: scaleX(1.2) scaleY(1.2); */
    filter: brightness(1.2) contrast(0.95) saturate(1);
    box-shadow: 3px 8px 8px 3px rgba(0, 0, 0, 0.596);
  }

  &&:hover img,
  &&:hover video {
    transform: scale(1.3);
  }
`;

const Metadata = styled.div`
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

const Text = styled.div`
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

const Title = styled(Text)`
  background-image: linear-gradient(90deg, #c5cbd8 70%, rgba(0, 0, 0, 0));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Category = styled(Text)`
  opacity: 0.5;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
`;

const Price = styled(Text)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 10px;
  gap: 4px;
`;

export default function Card({ item }) {
  const { active, community_item_data, point_cost, appid } = item;

  const { item_title } = community_item_data;
  const item_price = new Intl.NumberFormat().format(point_cost);

  const categories = {
    3: community_item_data.animated
      ? "Animated Background"
      : "Static Background",
    14: "Avatar Frame",
    15: "Avatar",
    8: "Profile Theme",
  };

  if (!active) return; // some items may be unavailable to buy

  return (
    <Wrapper>
      <Media
        appid={appid}
        type={item.community_item_class}
        meta={community_item_data}
      />
      <Metadata>
        <Title>{item_title}</Title>
        <Category>{categories[item.community_item_class]}</Category>
        <Price>
          <SteamCoin width={18} />
          {item_price}
        </Price>
      </Metadata>
    </Wrapper>
  );
}
