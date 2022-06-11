import CartActionElements from "./CartActionElements";

const Items = (props) => {
  const handleClick = (e) => {
    props.handleAddItem(props.shopItem.id);
  };

  return (
    <div>
      <img src={props.shopItem.image} alt={props.shopItem.title} />
      <p>{props.shopItem.brand}</p>
      <p>{props.shopItem.title}</p>
      <p>Price {props.shopItem.price}</p>
      <p>Size {props.shopItem.size?.join(" ")}</p>
      {"cart" != props.page && <button onClick={handleClick}>Add to Cart</button>}
      {"cart" == props.page && <CartActionElements />}
    </div>
  );
};

export default Items;
