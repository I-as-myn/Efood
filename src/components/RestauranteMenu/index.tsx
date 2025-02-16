import { useState } from 'react'
import {
  Card,
  Descricao,
  Titulo,
  HeaderCard,
  Button,
  Overlay,
  ModalContainer,
  CloseButton
} from './styles'

import fechar from '../../assets/image/fechar.png'
import { formataPreco } from '../RestauranteMenuList'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type Props = {
  id: number
  title: string
  description: string
  description2?: string
  description3?: string
  image: string
  priceItem?: number
}

const getDescricao = (descricao: string) => {
  return descricao.length > 170 ? descricao.slice(0, 167) + '...' : descricao
}

const RestauranteMenu = ({
  title,
  id,
  description,
  image,
  description2,
  description3,
  priceItem
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      add({
        id,
        title,
        description,
        image,
        priceItem: priceItem ?? 0
      })
    )
    dispatch(open())
  }

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <HeaderCard>
          <Titulo>{title}</Titulo>
        </HeaderCard>
        <Descricao>{getDescricao(description)}</Descricao>
        <Button to="" onClick={() => setIsModalOpen(true)}>
          Mais detalhes
        </Button>
      </Card>

      {isModalOpen && (
        <Overlay onClick={() => setIsModalOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>
              <img src={fechar} alt="Fechar" />
            </CloseButton>
            <img src={image} alt={title} />
            <div className="container">
              <h3>{title}</h3>
              <p>
                {description2 && (
                  <>
                    {description2} <br />
                    <br />
                  </>
                )}
                {description3 && <>Serve: {description3}</>}
              </p>
              <Button to="" className="customButton" onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(priceItem)}
              </Button>
            </div>
          </ModalContainer>
        </Overlay>
      )}
    </>
  )
}

export default RestauranteMenu
