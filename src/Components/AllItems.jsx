import React from "react";
import { ChevronUp, ChevronDown } from "../Icons";
import {
  removeItem,
  // increaseAmount,
  // decreaseAmount,
  toogleAmount,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux/es/exports";

export const AllItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button onClick={() => dispatch(removeItem(id))} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          // onClick={() => dispatch(increaseAmount(id))}
          onClick={() => {
            dispatch(toogleAmount({ ID: id, type: "increase" }));
          }}
          className="amount-btn"
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          // onClick={() => {
          //   if (amount <= 1) {
          //     dispatch(removeItem(id));
          //   } else {
          //     dispatch(decreaseAmount(id));
          //   }
          // }}
          onClick={() => {
            if (amount <= 1) {
              dispatch(removeItem(id));
            } else {
              dispatch(toogleAmount({ ID: id, type: "decrease" }));
            }
          }}
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
