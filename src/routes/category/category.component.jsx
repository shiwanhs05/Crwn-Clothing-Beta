import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector.js"
import { useState, useEffect, Fragment } from "react";
import {Container, Title} from "./category.styles";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("effect fired calling setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <Container>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Container>
    </Fragment>
  );
};

export default Category;
