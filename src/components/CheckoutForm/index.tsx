import { useState } from 'react'
import DeliveryForm from '../DeliveryForm'
import PaymentForm from '../PaymentForm'
import OrderConfirmation from '../OrderConfirmation'
import { MenuItem } from '../../pages/Categories'

interface CheckoutFormProps {
  onCloseCart: () => void // Fecha o carrinho
  onBackToCart: () => void // Volta ao carrinho
  onResetCart: () => void // Reseta o carrinho
  menu: MenuItem[]
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  onCloseCart,
  onBackToCart,
  onResetCart,
  menu
}) => {
  const [step, setStep] = useState<'entrega' | 'pagamento' | 'confirmacao'>(
    'entrega'
  )

  const [formData, setFormData] = useState({
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    },
    payment: {
      card: { name: '', number: '', code: 0, expires: { month: 0, year: 0 } }
    }
  })

  const [orderData, setOrderData] = useState<{ id: string } | null>(null)

  // Avança para o próximo passo
  const nextStep = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }))
    if (step === 'entrega') {
      setStep('pagamento')
    } else if (step === 'pagamento') {
      handleSubmitOrder()
    }
  }

  // Volta para o passo anterior
  const prevStep = () => {
    if (step === 'entrega') {
      onBackToCart() // Volta para o carrinho
    } else if (step === 'pagamento') {
      setStep('entrega')
    }
  }

  // Envia pedido para a API
  const handleSubmitOrder = async () => {
    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' }
        }
      )
      const data = await response.json()
      setOrderData(data)
      setStep('confirmacao')
    } catch (error) {
      console.error('Erro ao enviar pedido:', error)
    }
  }

  return (
    <div>
      {step === 'entrega' && (
        <DeliveryForm onNext={nextStep} onBack={prevStep} />
      )}
      {step === 'pagamento' && (menu as MenuItem[]).length > 0 && (
        <PaymentForm
          onNext={nextStep}
          onBack={prevStep}
          items={menu as MenuItem[]}
        />
      )}
      {step === 'confirmacao' && orderData && (
        <OrderConfirmation
          onCloseCart={onCloseCart} // Fecha o carrinho
          onResetCart={onResetCart} // Reseta o carrinho
        />
      )}
    </div>
  )
}

export default CheckoutForm
