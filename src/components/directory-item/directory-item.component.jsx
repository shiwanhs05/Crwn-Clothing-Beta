import { useNavigate } from "react-router-dom";
import {Container, Body, BackgroundImage, } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl: url, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <Container onClick={onNavigateHandler}>
      <BackgroundImage
      url={url}
      />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </Container>
  );
};

export default DirectoryItem;
