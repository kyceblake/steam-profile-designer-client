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

  return <>{showByType()}</>;
}
