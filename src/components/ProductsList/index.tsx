import Restaurantes from '../../models/Restaurantes'
import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  title: string
  restaurantes: Restaurantes[]
}

const ProductsList = ({ restaurantes }: Props) => (
  <Container>
    <List>
      {restaurantes.map((restaurantes) => (
        <Product
          key={restaurantes.id}
          id={restaurantes.id}
          title={restaurantes.title}
          description={restaurantes.description}
          image={restaurantes.image}
          infos={restaurantes.infos}
          grade={restaurantes.grade}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
