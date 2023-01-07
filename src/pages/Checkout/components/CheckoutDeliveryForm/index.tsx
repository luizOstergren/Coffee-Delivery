import { CurrencyDollar, MapPin } from "phosphor-react";
import { CheckoutAdress } from "./CheckoutAdress";
import { CheckoutPaymentMethods } from "./CheckoutPayment";

import {
  CheckoutDelivery,
  DeliveryContainer,
  HeaderDelivery,
  PaymentContainer,
  PaymentHeader,
  SubtitleDelivery,
} from "./styles";

export function CompleteDeliveryForm() {
  return (
    <CheckoutDelivery>
      <h3>Complete seu pedido</h3>

      <DeliveryContainer>
        <HeaderDelivery>
          <MapPin size={20} />
          Endereço de Entrega
        </HeaderDelivery>
        <SubtitleDelivery>
          Informe o endereço onde deseja receber seu pedido
        </SubtitleDelivery>
        <CheckoutAdress />
      </DeliveryContainer>

      <PaymentContainer>
        <PaymentHeader>
          <CurrencyDollar size={20} />
          Pagamento
        </PaymentHeader>
        <SubtitleDelivery>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar.
        </SubtitleDelivery>
        <CheckoutPaymentMethods />
      </PaymentContainer>
    </CheckoutDelivery>
  );
}
