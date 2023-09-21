import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {Container, ImageContainer, Quantity, RemoveBtn} from "./checkout-item.styles";
// removeItemFromCart(cartItem) addItemToCart(cartItem) 
export default function CheckoutItem({cartItem}) 
{
  const {name, imageUrl, price, quantity} = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart} =
    useContext(CartContext);
    const deleteItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem );
    const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className="name">{name}</span>
      <Quantity>
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </Quantity>
      <span className="price">{price}</span>
      <RemoveBtn onClick={deleteItemHandler}>
        &#10005;
      </RemoveBtn>
    </Container>
  );
}