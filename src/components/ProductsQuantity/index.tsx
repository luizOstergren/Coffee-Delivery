import { ProductQuantity, MinusButton } from "./styles";
import { Plus, Minus } from "phosphor-react";

interface ProductsQuantityProps {
  onMenusQuantity: () => void;
  onPlusQuantity: () => void;
  quantity: number;
}

export function ProductsQuantity({
  onMenusQuantity,
  onPlusQuantity,
  quantity,
}: ProductsQuantityProps) {
  const ZeroQuantity = quantity === 0;

  return (
    <>
      <ProductQuantity>
        <MinusButton as="button" disabled={ZeroQuantity} onClick={onMenusQuantity}>
          <Minus />
        </MinusButton>
        {quantity}
        <Plus onClick={onPlusQuantity} />
      </ProductQuantity>
    </>
  );
}
