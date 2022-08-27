import React from "react";
import { AllItems } from "./AllItems";
import { useSelector, useDispatch } from "react-redux";
import { OpenModel } from "../features/model/modelSlice";

export const CartContainer = () => {
  const dispatch = useDispatch();
  const { CartItems, amount, total } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <div className="cart">
        <h2>Your Bag</h2>
        <h4 className="empty-cart">list is is currently empty...</h4>
      </div>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bags</h2>
      </header>
      {/* cart items */}
      <div>
        {CartItems.map((item) => (
          <AllItems {...item} key={item.id} />
        ))}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(OpenModel())} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};
