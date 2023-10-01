import "./cart-item.styles.scss";

import { BASE_URL } from "../../";

const CartItem = ({
  item: { imageDirectory, name, price, quantity },
  className,
}) => (
  <div className={`cart-item ${className}`}>
    <img
      className="image"
      src={`${BASE_URL}${imageDirectory}/1.jpg`}
      alt="item"
    />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x €{price}
      </span>
    </div>
  </div>
);

export default CartItem;
