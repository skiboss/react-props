import React from "react";
import Avatar from "./Avatar";
import Details from "./Detail";

function Card(props) {
  const { name, tel, src, mail } = props;
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <Avatar src={src} />
      </div>
      <div className="bottom">
        <Details detailInfo={tel} />
        <Details detailInfo={mail} />
        {/* <p className="info">{mail}</p> */}
      </div>
    </div>
  );
}

export default Card;
