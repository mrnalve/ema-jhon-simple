import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, price, name, quantity } = product;
  console.log(product);
  const handleDelete = handleRemoveFromCart;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price: <span className="orange-text">${price}</span>
        </p>
        <p>
          Order Quantity: <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button onClick={()=>handleDelete(id)} className="btn-delete">
        <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviewItem;
