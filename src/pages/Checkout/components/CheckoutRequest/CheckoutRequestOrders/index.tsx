import { Trash } from "phosphor-react";
import { useCart } from "../../../../../hooks/useCart";
import { CartItem } from "../../../../../context/CartContext";
import { formatMoney } from "../../../../../utils/formatMoney";
import { ProductsQuantity } from "../../../../../components/ProductsQuantity";

import {
  RequestContent,
  RequestOrder,
  RequestPrice,
  RequestQuantityOrders,
  RequestRemove,
} from "./styles";

interface CheckoutRequestProps {
  coffee: CartItem;
}

export function CheckoutRequestOrders({ coffee }: CheckoutRequestProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.Price * coffee.quantity;

  const coffeeTotalPrice = formatMoney(coffeeTotal);

  return (
    <RequestContent>
      <img src={coffee.Image} alt="Coffee" />
      <RequestOrder>
        <p>{coffee.ProductName}</p>
        <RequestQuantityOrders>
          <ProductsQuantity
            onMenusQuantity={handleDecrease}
            onPlusQuantity={handleIncrease}
            quantity={coffee.quantity}
          />
          <RequestRemove as="button" onClick={handleRemove}>
            <Trash size={18} />
            Remover
          </RequestRemove>
        </RequestQuantityOrders>
      </RequestOrder>
      <RequestPrice>R$ {coffeeTotalPrice}</RequestPrice>
    </RequestContent>
  );
}
