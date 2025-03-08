import { useEffect, useState } from 'react'
import { Container } from './styles'

interface OrderConfirmationProps {
  onCloseCart: () => void
  onResetCart: () => void
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  onCloseCart,
  onResetCart
}) => {
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    // Gera um número de pedido aleatório
    const generateFakeOrderId = () => {
      return Math.floor(10000000 + Math.random() * 90000000).toString()
    }

    setOrderId(generateFakeOrderId())
  }, [])

  const handleFinish = () => {
    onResetCart() // Reseta o carrinho
    onCloseCart() // Fecha o carrinho
  }

  return (
    <Container>
      <h2>Pedido realizado - {orderId}</h2>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <button onClick={handleFinish}>Concluir</button>
    </Container>
  )
}

export default OrderConfirmation
