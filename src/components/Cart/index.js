import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CartArea,
  CartHeader,
  CartIcon,
  CartText,
  CartBody,
  ProductsArea,
  ProductItem,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQuantityArea,
  ProductQtIcon,
  ProductQtText,
} from "./styled";

export default ({ icon, link }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const history = useHistory();
  const location = useLocation();

  const [show, setShow] = useState(false);
  let isActive = location.pathname == link;
  const handleClick = (e) => {
    e.preventDefault();
    history.push(link);
  };

  const handleCartClick = (key, type) => {
    setShow(!show);
  };

  const handleProductChange = (key, type) => {
    dispatch({
      type: "CHANGE_PRODUCT",
      payload: {
        key,
        type,
      },
    });
  };
  return (
    <CartArea>
      <CartHeader onClick={handleCartClick}>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu carrinho ({products.length})</CartText>
        {show && <CartIcon src="/assets/down.png" />}
      </CartHeader>
      <CartBody show={show}>
        <ProductsArea>
          {products.map((item, index) => (
            <ProductItem key={index}>
              <ProductPhoto src={item.image} />
              <ProductInfoArea>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>R${item.price.toFixed(2)}</ProductPrice>
              </ProductInfoArea>
              <ProductQuantityArea>
                <ProductQtIcon
                  src="/assets/minus.png"
                  onClick={() => handleProductChange(index, "-")}
                />
                <ProductQtText>{item.qt}</ProductQtText>
                <ProductQtIcon
                  src="/assets/plus.png"
                  onClick={() => handleProductChange(index, "+")}
                />
              </ProductQuantityArea>
            </ProductItem>
          ))}
        </ProductsArea>
      </CartBody>
    </CartArea>
  );
};
