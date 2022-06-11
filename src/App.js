import "./App.css";

import React, { useRef, useReducer } from "react";
import Items from "./Items";
import shopItemsData from "./ShopItems";
import CartPage from "./CartPage";

const reducer = (state, action) => {
  if ('ADD_ITEM' === action.type) {
    const existingCartItem = state.cartItems.findIndex(
      item => item.id === action.itemId
    );
    if (!existingCartItem) {
      const updatedItem = state.cartItems.concat({
        id: action.itemId,
        quantity: 1
      });

      return {
        cartItems: updatedItem,
        totalPrice: state.totalPrice
      };
    }

    state.cartItems[existingCartItem].quantity = state.cartItems[existingCartItem].quantity + 1;
    return { ...state };
  }

  return state;
};

const initialState = {
  cartItems: [],
  totalPrice: "",
};

function App() {
  const shopItems = useRef(shopItemsData);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddItem = (id) => {
    dispatch({ type: 'ADD_ITEM', itemId: id });
  };
  const handleRemoveItem = () => {};
  const handleItemQuantityChange = () => {};

  return (
    <div className="App">
      <div className="home">
        <p>Clothing And Accessories</p>
        {shopItems.current.map((item) => (
          <Items key={item.id} shopItem={item} page="home" handleAddItem={handleAddItem} />
        ))}
      </div>
      <div className="cart">
        <CartPage items={state.cartItems} handleRemoveItem={handleRemoveItem} handleItemQuantityChange={handleItemQuantityChange} />
      </div>
    </div>
  );
}

export default App;
