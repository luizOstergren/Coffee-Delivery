import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { CheckoutRequestOrders } from "./CheckoutRequestOrders";

import {
  CheckoutCoffes,
  CheckoutContainer,
  RequestConfirmOrder,
  RequestContainer,
  RequestDelivery,
  RequestTotal,
  RequestTotalItens,
} from "./styles";

const DeliveryPrice = 3.5;

export function CheckoutRequest() {
  const { cartItemsTotal, cartQuantity, cartItems } = useCart();

  const cartTotal = DeliveryPrice + cartItemsTotal;

  const cartPrice = formatMoney(cartTotal);
  const deliveryFormattedPrice = formatMoney(DeliveryPrice);
  const cartItemsPrice = formatMoney(cartItemsTotal);

  return (
    <CheckoutContainer>
      <CheckoutCoffes>
        <h3>Cafés selecionados</h3>
        <RequestContainer>
          {cartItems.map((Item) => (
            <CheckoutRequestOrders key={Item.id} coffee={Item} />
          ))}
          <RequestTotalItens>
            Total de itens
            <span>R$ {cartItemsPrice}</span>
          </RequestTotalItens>
          <RequestDelivery>
            Entrega
            <span>R$ {deliveryFormattedPrice}</span>
          </RequestDelivery>
          <RequestTotal>
            Total
            <span>R$ {cartPrice}</span>
          </RequestTotal>
          <RequestConfirmOrder type="submit" disabled={cartQuantity <= 0}>
            CONFIRMAR PEDIDO
          </RequestConfirmOrder>
        </RequestContainer>
      </CheckoutCoffes>
    </CheckoutContainer>
  );
}
