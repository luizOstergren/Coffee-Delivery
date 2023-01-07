import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { ProductsItem } from "..";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ProductsQuantity } from "../../../../components/ProductsQuantity";

import {
  Cart,
  DescriptionProducts,
  Ingredients,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProdutcsContainer,
  QuantityProducts,
} from "./styles";

interface Coffee {
  coffee: ProductsItem;
}

export function Products({ coffee }: Coffee) {
  const [quantity, setQuantity] = useState(0);

  function handleAddItem() {
    const cooffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(cooffeeToAdd);
  }

  function handleMinusQuantity() {
    if (quantity > 0) {
      setQuantity((state) => {
        return state - 1;
      });
    }
  }

  function handlePlusQuantity() {
    setQuantity((state) => {
      return state + 1;
    });
  }

  const { addCoffeeToCart } = useCart();

  const formatPrice = formatMoney(coffee.Price);

  const ZeroQuantity = quantity === 0;

  return (
    <ProdutcsContainer>
      <ProductContainer>
        <ProductImage>
          <img src={coffee.Image} alt="" />
        </ProductImage>
        <DescriptionProducts>
          <Ingredients>
            {coffee.Ingredients.map((ingredients) => (
              <span key={`${coffee.id}${ingredients}`}>{ingredients}</span>
            ))}
          </Ingredients>
          <ProductName>{coffee.ProductName}</ProductName>
          <ProductDescription>{coffee.Description}</ProductDescription>
        </DescriptionProducts>
        <ProductInfo>
          <ProductPrice>
            R$ <span>{formatPrice}</span>
          </ProductPrice>
          <QuantityProducts>
            <ProductsQuantity
              onMenusQuantity={handleMinusQuantity}
              onPlusQuantity={handlePlusQuantity}
              quantity={quantity}
            />
            <Cart disabled={ZeroQuantity} onClick={handleAddItem}>
              <ShoppingCart />
            </Cart>
          </QuantityProducts>
        </ProductInfo>
      </ProductContainer>
    </ProdutcsContainer>
  );
}
