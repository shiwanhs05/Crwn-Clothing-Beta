import {Container, ShoppingBagIcon, ItemCount} from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
    
  return (
    <Container onClick={toggleCartOpen}>
      <ShoppingBagIcon />
      <ItemCount>{cartCount}</ItemCount>
    </Container>
  );
};
export default CartIcon;
