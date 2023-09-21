import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { Container, EmptyMessage, CartItemsContainer } from "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = function () {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = ()  => {
    navigate("/checkout");
  }
  return (
    <Container>
    <CartItemsContainer>
    {
      cartItems.length ? cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>) : <EmptyMessage>Your cart is empty</EmptyMessage>
    }
    </CartItemsContainer>
    <Button onClick={goToCheckoutHandler}>
    PROCEED TO BUY</Button>
    </Container>
  )
};
export default CartDropdown;