import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { CartProduct } from "../../interfaces/Cart";

interface CardProductsProps {
  name: string;
  price: number;
  image: string;
}

export function CardProducts(props: CardProductsProps) {
  const navigate = useNavigate()

  function handleAddProduct() {
    console.log(`Adicionou ao carrinho o produto ${props.name}`)

    const cart = localStorage.getItem('@cart')

    if (cart) {
      const cartParsed: CartProduct[] = JSON.parse(cart)
      const product = cartParsed.find(product => product.product.name === props.name)

      console.log(cartParsed)

      if (product) {
        product.quantity += 1
        localStorage.setItem('@cart', JSON.stringify(cartParsed))
      } else {
        const newProduct: CartProduct = {
          product: props,
          quantity: 1
        }
        localStorage.setItem('@cart', JSON.stringify([...cartParsed, newProduct]))
      }
    } else {
      const product: CartProduct = {
        product: props,
        quantity: 1
      }
      localStorage.setItem('@cart', JSON.stringify([product]))
    }

    navigate('/cart')
  }
  
  return (
    <Container>
      <div className="wrapper-img">
        <img src={props.image} alt="" />
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span>R$ {props.price}</span>
        <button onClick={handleAddProduct}>Adicionar ao carrinho</button>
      </div>
    </Container>
  )
}