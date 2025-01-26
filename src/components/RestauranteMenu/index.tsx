import { Card, Descricao, Titulo, HeaderCard, Button } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const RestauranteMenu = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <HeaderCard>
      <Titulo>{title}</Titulo>
    </HeaderCard>
    <Descricao>{description}</Descricao>
    <Button to="/categories">Adicionar ao carrinho</Button>
  </Card>
)

export default RestauranteMenu
