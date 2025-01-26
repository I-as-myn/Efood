import Tag from '../Tag'

import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Rating,
  HeaderCard,
  Button
} from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  grade: number
}

const Product = ({ title, description, infos, image, grade }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <HeaderCard>
      <Titulo>{title}</Titulo>
      <Rating>{grade} ⭐</Rating>
    </HeaderCard>
    <Descricao>{description}</Descricao>
    <Button to="/categories">Saiba mais</Button>
  </Card>
)

export default Product
