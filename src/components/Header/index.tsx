import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <div className="container">
        <h1>Yadaa<span>food</span></h1>
        <nav>
          <a href="">Produtos</a>
          <a href="">Mais vendidos</a>
          <a href="">Carrinho</a>
        </nav>
      </div>
    </Container>
  )
}