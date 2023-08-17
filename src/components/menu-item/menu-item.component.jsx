import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  MenuItemContainer,
} from "./menu-item.styles";

const MenuItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)
  return (
    <MenuItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </MenuItemContainer>
  );
};

export default MenuItem;
