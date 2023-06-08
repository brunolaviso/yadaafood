import { CardProducts } from "../../components/CardProducts";
import { Header } from "../../components/Header";

import { ContainerProducts } from './styles'

export function Products() {
  return (
    <>
      <Header />
      <div className="container">
        <ContainerProducts>
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
        </ContainerProducts>
      </div>
    </>
  )
}