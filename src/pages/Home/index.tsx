import { ProductsCoffees } from "./ProductsCoffees";

import {
  CoffeeContainer,
  DescriptionContainer,
  DescriptionItem,
  IntroductionContainer,
  PackageContainer,
  ShoppingCartContainer,
  TimerContainer,
  IntroductionTitle,
} from "./styles";

import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import CoffeeImage from "../../assets/Imagem.svg";

export function Home() {
  return (
    <>
      <IntroductionContainer>
        <div>
          <IntroductionTitle>
            <h1>Encontre o café prefeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </IntroductionTitle>
          <DescriptionContainer>
            <DescriptionItem>
              <ShoppingCartContainer>
                <ShoppingCart size={16} />
              </ShoppingCartContainer>
              <span>Compra simples e segura</span>
            </DescriptionItem>
            <DescriptionItem>
              <PackageContainer>
                <Package size={16} />
              </PackageContainer>
              <span>Embalagem mantém o café intacto</span>
            </DescriptionItem>
            <DescriptionItem>
              <TimerContainer>
                <Timer size={16} />
              </TimerContainer>
              <span>Entrega rápida e rastreada</span>
            </DescriptionItem>
            <DescriptionItem>
              <CoffeeContainer>
                <Coffee size={16} />
              </CoffeeContainer>
              <span>O café chega frequinho até você</span>
            </DescriptionItem>
          </DescriptionContainer>
        </div>
        <div>
          <img src={CoffeeImage} alt="" />
        </div>
      </IntroductionContainer>

      <ProductsCoffees />
    </>
  );
}
