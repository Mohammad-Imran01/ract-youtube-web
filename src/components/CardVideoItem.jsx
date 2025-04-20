import "./css/cardVideoItem.css";

const CardVideoItem = () => {
  return (
    <>
      <p className="video-title">
        Talking tech and AI with google CEO Sundar Pichai!
      </p>
      <p className="video-stats">3.4M views &#183; 6 months ago</p>

      <p classname="video-author">Marques Brownlee &#10003;</p>

      <p className="video-description">
        Talking text and AI on the heels of Google I/O. Also a daily driver
        phone reveal from Google's CEO. Shoutout to Sundar!
      </p>
    </>
  );
};

export default CardVideoItem;
