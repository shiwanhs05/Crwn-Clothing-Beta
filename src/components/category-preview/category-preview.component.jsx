import { Container, Preview, Title } from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({title, products})  => {

  return (
    <Container>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>

      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </Container>
  );
};

export default CategoryPreview;