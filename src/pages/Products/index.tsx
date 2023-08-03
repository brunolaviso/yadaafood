import { useEffect } from "react";
import { CardProducts } from "../../components/CardProducts";
import { Header } from "../../components/Header";

import { ContainerProducts } from './styles'

export function Products() {
  useEffect(() => {
    fetch("https://api.airtable.com/v0/app5Vj8ekDqkUVUkD/products", {
      headers: {
        "Authorization": `Bearer  ${import.meta.env.VITE_API_TOKEN}`
      }})
      .then(response => response.json())
      .then(response => console.log(response))
  }, [])

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