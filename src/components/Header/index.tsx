import {
  HeaderContainer,
  BuyContent,
  LocationContent,
  ShoppingCartContent,
  ShoppingCartItems,
} from "./styles";

import { MapPin, ShoppingCart } from "phosphor-react";

import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Logo">
          <img src={Logo} alt="logo" />
        </NavLink>
      </nav>
      <BuyContent>
        <LocationContent>
          <MapPin size={20} />
          <span>Porto Alegre, RS</span>
        </LocationContent>
        <ShoppingCartContent>
          <NavLink to="/checkout" title="Compras">
            <ShoppingCart size={20} />
            {cartQuantity > 0 && (
              <ShoppingCartItems>
                <p> {cartQuantity} </p>
              </ShoppingCartItems>
            )}
          </NavLink>
        </ShoppingCartContent>
      </BuyContent>
    </HeaderContainer>
  );
}
