import { useEffect, useState } from "react";
import { Products } from "./Products";
import { CoffeeList, TitleCoffee } from "./styles";

export interface ProductsItem {
  id: number;
  Image: string;
  Ingredients: string[];
  ProductName: string;
  Description: string;
  Price: number;
}

export function ProductsCoffees() {
  const [productsItems, setProductsItems] = useState<ProductsItem[]>([]);

  async function loadProductsItems() {
    const response = await fetch("http://localhost:3000/Products");
    const data = await response.json();

    setProductsItems(data);
  }

  useEffect(() => {
    loadProductsItems();
  }, []);

  return (
    <>
      <TitleCoffee>Nossos cafés</TitleCoffee>

      <CoffeeList>
        {productsItems.map((coffee) => (
          <Products key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </>
  );
}
