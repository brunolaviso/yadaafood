import { Container } from "./styles";

interface CardProductsProps {
  name: string;
  price: number;
  image: string;
}

export function CardProducts(props: CardProductsProps) {
  // JAVASCRIPT
  
  return (
    // HTML

    <Container>
      <img src={props.image} alt="" />
      <div className="info">
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span>R$ {props.price}</span>
        <button>Adicionar ao carrinho</button>
      </div>
    </Container>
  )
}