import React from "react";
import s from "./Card.module.css";
import SteamCoin from "../../assets/SteamCoin";

function Media({ appid, type, meta }) {
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
}

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
    <div className={s.Card}>
      <div className={s.Header}>
        <Media
          appid={appid}
          type={item.community_item_class}
          meta={community_item_data}
        />
      </div>
      <div className={s.Body}>
        <p className={s.ItemTitle}>{item_title}</p>
        <p className={s.ItemType}>{categories[item.community_item_class]}</p>
        <div className={s.Price}>
          <SteamCoin width={18} />
          {item_price}
        </div>
      </div>
    </div>
  );
}
