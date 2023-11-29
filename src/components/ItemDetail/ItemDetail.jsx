import React from "react";

const ItemDetail = ({ item }) => {
  const { title, description, price, pictureUrl } = item;

  return (
    <div className="item-detail">
      <div className="item-detail-image">
        <img src={pictureUrl} alt={title} />
      </div>
      <div className="item-detail-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
