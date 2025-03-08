import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../RestauranteMenuList'
import { RootReducer } from '../../store'
import CheckoutForm from '../CheckoutForm'
import { getTotalPrice } from '../../utils'

// Adicionar a ação para resetar o carrinho
import { clearCart } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)

  // Fecha o carrinho
  const closeCart = () => {
    dispatch(close())
    setShowCheckout(false) // Fecha o checkout se o carrinho for fechado
  }

  // Remove um item do carrinho
  const removeItem = (id: number) => {
    dispatch(remove(id))
    if (items.length === 1) {
      closeCart() //fecha o carrinho se for o único item
    }
  }

  // Reseta o carrinho após o pedido ser finalizado
  const resetCart = () => {
    dispatch(clearCart()) // Limpa o carrinho
    closeCart() //fecha o carrinho
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {showCheckout ? (
          <CheckoutForm
            onCloseCart={closeCart}
            onBackToCart={() => setShowCheckout(false)}
            onResetCart={resetCart} // 🔹 Adicionando o reset do carrinho
            menu={items}
          />
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <span>{formataPreco(item.priceItem)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              Valor total <span>{formataPreco(getTotalPrice(items))}</span>
            </Prices>
            <Button
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={() => setShowCheckout(true)}
            >
              Continuar com a entrega
            </Button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
