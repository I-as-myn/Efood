import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { ButtonGroup, InputGroup, PurchaseForm, RowGroup } from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'
import { MenuItem } from '../../pages/Categories'

interface PaymentData {
  name: string
  number: string
  code: string
  expiresMonth: string
  expiresYear: string
}

interface PaymentFormProps {
  onNext: (data: { payment: PaymentData }) => void
  items: MenuItem[] // Passando os itens do carrinho
  onBack?: () => void
}

type PaymentFormFields =
  | 'name'
  | 'number'
  | 'code'
  | 'expiresMonth'
  | 'expiresYear'

const PaymentForm: React.FC<PaymentFormProps> = ({ onNext, onBack, items }) => {
  const form = useFormik({
    initialValues: {
      name: '',
      number: '',
      code: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .max(50, 'Nome muito longo')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .required('O campo é obrigatório')
        .min(19, 'O campo precisa ter 16 caracteres')
        .max(19, 'O campo precisa ter 16 caracteres'),
      code: Yup.string()
        .required('O campo é obrigatório')
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres'),
      expiresMonth: Yup.string()
        .required('O campo é obrigatório')
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .test('valid-month', 'O mês deve estar entre 01 e 12', (value) => {
          const month = Number(value)
          return month >= 1 && month <= 12
        }),
      expiresYear: Yup.string()
        .required('O campo é obrigatório')
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
    }),
    onSubmit: (values) => {
      const { name, number, code, expiresMonth, expiresYear } = values
      onNext({ payment: { name, number, code, expiresMonth, expiresYear } })
    }
  })

  const checkInputHasError = (fieldName: PaymentFormFields) => {
    const isTouched = form.touched[fieldName]
    const isInvalid = form.errors[fieldName]
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <PurchaseForm onSubmit={form.handleSubmit}>
      <h2>
        Pagamento
        <span>{` - Valor a pagar ${parseToBrl(getTotalPrice(items))}`}</span>
        {/* Exibindo o valor total calculado */}
      </h2>
      <InputGroup>
        <label htmlFor="name">Nome no cartão</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.values.name}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('name') ? 'error' : ''}
        />
        {checkInputHasError('name') && (
          <span className="error-message">{form.errors.name}</span>
        )}
      </InputGroup>
      <RowGroup>
        <InputGroup>
          <label htmlFor="number">Número do cartão</label>
          <InputMask
            type="text"
            id="number"
            name="number"
            value={form.values.number}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('number') ? 'error' : ''}
            mask="9999 9999 9999 9999"
          />
          {checkInputHasError('number') && (
            <span className="error-message">{form.errors.number}</span>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="code">CVV</label>
          <InputMask
            type="text"
            id="code"
            name="code"
            value={form.values.code}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('code') ? 'error' : ''}
            mask="999"
          />
          {checkInputHasError('code') && (
            <span className="error-message">{form.errors.code}</span>
          )}
        </InputGroup>
      </RowGroup>
      <RowGroup>
        <InputGroup>
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <InputMask
            type="text"
            id="expiresMonth"
            name="expiresMonth"
            value={form.values.expiresMonth}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('expiresMonth') ? 'error' : ''}
            mask="99"
          />
          {checkInputHasError('expiresMonth') && (
            <span className="error-message">{form.errors.expiresMonth}</span>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <InputMask
            type="text"
            id="expiresYear"
            name="expiresYear"
            value={form.values.expiresYear}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('expiresYear') ? 'error' : ''}
            mask="99"
          />
          {checkInputHasError('expiresYear') && (
            <span className="error-message">{form.errors.expiresYear}</span>
          )}
        </InputGroup>
      </RowGroup>
      <ButtonGroup>
        <button type="submit">Finalizar pedido</button>
        {onBack && (
          <button type="button" onClick={onBack}>
            Voltar para o carrinho
          </button>
        )}
      </ButtonGroup>
    </PurchaseForm>
  )
}

export default PaymentForm
