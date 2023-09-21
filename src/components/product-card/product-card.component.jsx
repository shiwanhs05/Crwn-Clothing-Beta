import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { Container, Footer, Name, Price } from "./product-card.styles";

const ProductCard = function({product}) {
  const  {name, price, imageUrl} = product;
  const {addItemToCart} = useContext(CartContext);
  
  const addProductToCart = () => addItemToCart(product);

  // ProductCard
  return (
    <Container >
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add To Cart
      </Button>
    </Container>
  );
};
export default ProductCard;