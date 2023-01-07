import { useFormContext } from "react-hook-form";
import { Input } from "../../../../../components/Input";

import {
  AdressCep,
  AdressDistrict,
  AdressNumber,
  AdressStreet,
  CheckoutAdressContainer,
} from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function CheckoutAdress() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <CheckoutAdressContainer>
      <AdressCep>
        <Input
          placeholder="CEP"
          type="number"
          {...register("cep")}
          error={errors.cep?.message}
        />
      </AdressCep>

      <AdressStreet>
        <Input
          placeholder="Rua"
          {...register("street")}
          error={errors.street?.message}
        />
      </AdressStreet>

      <AdressNumber>
        <Input
          placeholder="Número"
          type="number"
          {...register("number")}
          error={errors.number?.message}
        />
        <Input
          placeholder="Complemento"
          {...register("complement")}
          rightText="opcional"
          error={errors.complement?.message}
        />
      </AdressNumber>

      <AdressDistrict>
        <Input
          placeholder="Bairro"
          {...register("district")}
          error={errors.district?.message}
        />
        <Input
          placeholder="Cidade"
          {...register("city")}
          error={errors.city?.message}
        />
        <Input
          placeholder="UF"
          {...register("uf")}
          error={errors.uf?.message}
        />
      </AdressDistrict>
    </CheckoutAdressContainer>
  );
}
