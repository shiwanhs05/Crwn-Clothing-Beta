import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { Block, Container, Header, Total } from "./checkout.styles";
export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <Container>
      <Header>
        <Block>
          <span>Product</span>
        </Block>
        <Block>
          <span>Description</span>
        </Block>
        <Block>
          <span>Quantity</span>
        </Block>
        <Block>
          <span>Price</span>
        </Block>
        <Block>
          <span>Remove</span>
        </Block>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </Container>
  );
}
