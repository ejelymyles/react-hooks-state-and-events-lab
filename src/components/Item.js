import React, {useState} from "react";


function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleCart(){
    setInCart((inCart) => !inCart)
  }

  const cartClass = inCart ? "Remove From Cart" : "Add to Cart"
  const liCartClass = inCart ? "in-cart" : " "

  return (
    <li className={liCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cartClass}</button>
    </li>
  );
}

export default Item;
