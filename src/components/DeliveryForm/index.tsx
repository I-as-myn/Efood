import { useFormik } from 'formik'
import * as Yup from 'yup'

import { AddressForm, ButtonGroup, InputGroup, RowGroup } from './styles'
import InputMask from 'react-input-mask'

interface DeliveryData {
  receiver: string
  description: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

interface DeliveryFormProps {
  onNext: (data: { delivery: DeliveryData }) => void
  onBack?: () => void
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ onNext, onBack }) => {
  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter o mínimo de 5 caracteres')
        .max(50, 'Nome muito longo')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'Endereço muito curto')
        .max(100, 'Endereço muito longo')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(2, 'Nome da cidade muito curto')
        .max(100, 'Nome da cidade muito longo')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo precisa ter 8 caracteres')
        .max(9, 'O campo precisa ter 8 caracteres')
        .typeError('O CEP deve ser um número')
        .required('O campo é obrigatório'),
      number: Yup.number()
        .required('O campo é obrigatório')
        .typeError('O número deve ser um número'),
      complement: Yup.string()
        .max(100, 'O complemento não pode ter mais de 100 caracteres')
        .optional()
    }),
    onSubmit: (values) => {
      const { receiver, description, city, complement, number, zipCode } =
        values // Desestruturando
      onNext({
        delivery: { city, description, number, receiver, zipCode, complement }
      }) // Passando as propriedades corretamente
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <AddressForm onSubmit={form.handleSubmit}>
      <h2>Entrega</h2>
      <InputGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <input
          type="text"
          id="receiver"
          name="receiver"
          value={form.values.receiver}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('receiver') ? 'error' : ''}
        />
        {checkInputHasError('receiver') && (
          <span className="error-message">{form.errors.receiver}</span>
        )}
      </InputGroup>
      <InputGroup>
        <label htmlFor="description">Endereço</label>
        <input
          type="text"
          id="description"
          name="description"
          value={form.values.description}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('description') ? 'error' : ''}
        />
        {checkInputHasError('description') && (
          <span className="error-message">{form.errors.description}</span>
        )}
      </InputGroup>
      <InputGroup>
        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          id="city"
          name="city"
          value={form.values.city}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('city') ? 'error' : ''}
        />
        {checkInputHasError('city') && (
          <span className="error-message">{form.errors.city}</span>
        )}
      </InputGroup>
      <RowGroup>
        <InputGroup>
          <label htmlFor="zipCode">CEP</label>
          <InputMask
            type="text"
            id="zipCode"
            name="zipCode"
            value={form.values.zipCode}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('zipCode') ? 'error' : ''}
            mask="99999-999"
          />
          {checkInputHasError('zipCode') && (
            <span className="error-message">{form.errors.zipCode}</span>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="number">Número</label>
          <input
            type="number"
            id="number"
            name="number"
            value={form.values.number}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('number') ? 'error' : ''}
          />
          {checkInputHasError('number') && (
            <span className="error-message">{form.errors.number}</span>
          )}
        </InputGroup>
      </RowGroup>
      <InputGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input
          type="text"
          id="complement"
          name="complement"
          value={form.values.complement}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputHasError('complement') ? 'error' : ''}
        />
        {checkInputHasError('complement') && (
          <span className="error-message">{form.errors.complement}</span>
        )}
      </InputGroup>
      <ButtonGroup>
        <button type="submit">Continuar para o pagamento</button>
        {onBack && (
          <button type="button" onClick={onBack}>
            Voltar para o carrinho
          </button>
        )}
      </ButtonGroup>
    </AddressForm>
  )
}

export default DeliveryForm
