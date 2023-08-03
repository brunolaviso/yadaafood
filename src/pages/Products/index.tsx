import { useEffect, useState } from "react";
import { CardProducts } from "../../components/CardProducts";
import { Header } from "../../components/Header";

import { ContainerProducts } from './styles'

export function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://api.airtable.com/v0/app5Vj8ekDqkUVUkD/products", {
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_API_TOKEN}`
      }})
      .then(response => response.json())
      .then(response => setProducts(response.records))
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <ContainerProducts>
          {products.map((product) => (
            <CardProducts
              key={product.id}
              name={product.fields.Name}
              price={product.fields.Amount}
              image={product.fields.Image}
            />
          ))}
        </ContainerProducts>
      </div>
    </>
  )
}