import React from "react";
import { Container, CategoryImage } from "./styled";

export default ({ data, activeCategory, setActiveCaregory }) => {
  const handleCategoryClick = () => {
    setActiveCaregory(data.id);
  };
  return (
    <Container
      active={activeCategory}
      id={data.id}
      onClick={handleCategoryClick}
      data-tip={data.name}
      data-for="tip-top"
    >
      <CategoryImage src={data.image} />
    </Container>
  );
};
