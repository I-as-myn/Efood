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

import pizza from '../../assets/image/pizza.png'
import fechar from '../../assets/image/fechar.png'
import { formataPreco } from '../RestauranteMenuList'

type Props = {
  title: string
  description: string
  description2?: string
  description3?: string
  image: string
  priceItem?: number
}

const RestauranteMenu = ({
  title,
  description,
  image,
  description2,
  description3,
  priceItem
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <HeaderCard>
          <Titulo>{title}</Titulo>
        </HeaderCard>
        <Descricao>{description}</Descricao>
        <Button to="" onClick={() => setIsModalOpen(true)}>
          Adicionar ao carrinho
        </Button>
      </Card>
      {isModalOpen && (
        <Overlay onClick={() => setIsModalOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>
              <img src={fechar} />
            </CloseButton>
            <img src={pizza}></img>
            <div className="container">
              <h3>{title}</h3>
              <p>
                {description2} <br />
                <br />
                {description3}
              </p>
              <Button to="" className="customButton">
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
