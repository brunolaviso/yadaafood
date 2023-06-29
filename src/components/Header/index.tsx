import { Link, useNavigate } from 'react-router-dom'
import { Container } from './styles'

export function Header() {
  const navigate = useNavigate()

  return (
    <Container>
      <div className="container">
        <h1 onClick={() => navigate("/")}>Y<span>food</span></h1>
        <nav>
          <Link to="/products">Produtos</Link>
          <Link to="">Mais vendidos</Link>
          <Link to="/cart">Carrinho</Link>
        </nav>
      </div>
    </Container>
  )
}