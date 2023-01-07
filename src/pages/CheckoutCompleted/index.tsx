import Delivery from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { OrderData } from "../Checkout";
import { paymentOptions } from "../Checkout/components/CheckoutDeliveryForm/CheckoutPayment";

import {
  CheckoutCompletedContainer,
  CompletedOrder,
  CompletedOrderContainer,
  CompletedOrderContent,
  CompletedOrderHeader,
  DollarContainer,
  MapContainer,
  TimerContainer,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function CheckoutCompleted() {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <CheckoutCompletedContainer>
      <CompletedOrder>
        <CompletedOrderHeader>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </CompletedOrderHeader>

        <CompletedOrderContainer>
          <CompletedOrderContent>
            <MapContainer>
              <MapPin />
            </MapContainer>
            <div>
              <p>
                Entrega em{" "}
                <strong>
                  {state.street}, {state.number}
                </strong>
              </p>
              <p>
                {state.district} - {state.city}, {state.uf}
              </p>
            </div>
          </CompletedOrderContent>
          <CompletedOrderContent>
            <TimerContainer>
              <Timer />
            </TimerContainer>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </CompletedOrderContent>
          <CompletedOrderContent>
            <DollarContainer>
              <CurrencyDollar />
            </DollarContainer>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{paymentOptions[state.paymentMethod].label}</strong>
            </div>
          </CompletedOrderContent>
        </CompletedOrderContainer>
      </CompletedOrder>
      <img src={Delivery} alt="" />
    </CheckoutCompletedContainer>
  );
}
