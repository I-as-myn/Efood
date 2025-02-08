import { Link } from 'react-router-dom'
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
  id: number
  title: string
  description: string
  infos: string[]
  image: string
  grade: number
}

const getDescricao = (descricao: string) => {
  if (descricao.length > 248) {
    return descricao.slice(0, 245) + '...'
  }
  return descricao
}

const Product = ({ id, title, description, infos, image, grade }: Props) => (
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
    <Descricao>{getDescricao(description)}</Descricao>
    <Button as={Link} to={`/categories/${id}`}>
      Saiba mais
    </Button>
  </Card>
)

export default Product

// id
// Titulo
// destaque
// tipo
// avaliacao
// Descricao
// capa
// cardapio {
//   id
//   Foto
//   preco
//   NOME
//   Descricao
//   porcao
// }
