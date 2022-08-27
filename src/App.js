import { useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { CartContainer } from "./Components/CartContainer";
import { Model } from "./Components/Model";
import { calculatesTotal, getCartItems } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { CartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.model);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculatesTotal());
  }, [CartItems]);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Data is loading...</h2>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Model />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
