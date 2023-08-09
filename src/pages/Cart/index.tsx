import { useState } from "react";
import { Header } from "../../components/Header";
import { CartBox, CartTotal, Product } from "./styles";
import { CartProduct } from "../../interfaces/Cart";

export function Cart() {
  const [cartProductState, setCartProductState] = useState<CartProduct[]>(
    localStorage.getItem('@cart') ? 
      JSON.parse(localStorage.getItem('@cart') || '') :
      []
  )

  function handleChangeQuantity(operation: 'add' | 'remove', product: CartProduct) {
    const newCartProductState = cartProductState.map((cartProduct) => {
      if (cartProduct.product.name === product.product.name) {
        if (operation === 'add') {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1
          }
        } else {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1
          }
        }
      } else {
        return cartProduct
      }
    })

    const newCartProductStateWithoutProductQuantityZero = newCartProductState.filter((cartProduct) => cartProduct.quantity > 0)

    setCartProductState(newCartProductStateWithoutProductQuantityZero)
    localStorage.setItem('@cart', JSON.stringify(newCartProductStateWithoutProductQuantityZero))
  }

  return (
    <>
    <Header />
    <div className="container">
      {cartProductState.length === 0 ? 
      <h1>Carrinho vazio!</h1> : (
        <>
          <h1>Carrinho</h1>
          <CartBox>
            {cartProductState.map((cartProduct) => (
              <Product key={cartProduct.product.name}>
                <div className="img">
                  <img src={cartProduct.product.image} alt={cartProduct.product.name} />
                </div>
                <div className="info">
                  <div className="description">
                    <h2>{cartProduct.product.name}</h2>
                    <span>R$ {cartProduct.product.price}</span>
                  </div>
                  <div className="quantity">
                    <span>Quantidade</span>
                    <span>
                      <button onClick={() => handleChangeQuantity('remove', cartProduct)}>-</button>
                      {cartProduct.quantity}
                      <button onClick={() => handleChangeQuantity('add', cartProduct)}>+</button>
                    </span>
                  </div>
                </div>
              </Product>
            ))}
            <CartTotal>
              <span>Total</span>
              <span className="price">R$ {cartProductState.reduce((acc, cartProduct) => acc + (cartProduct.product.price * cartProduct.quantity), 0)}</span>
            </CartTotal>
          </CartBox>
        </>
      )}
    </div>
  </>
  )
}
