import Items from "./Items";

const CartPage = (props) => {
  return (
    <div>
      <p>Cart Page:</p>
      <p>Cart Items</p>
      {props.items.map((item) => (
        <Items key={item.id} shopItem={item} page="cart" />
      ))}
    </div>
  );
};

export default CartPage;
