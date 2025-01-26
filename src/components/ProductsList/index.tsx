import Restaurantes from '../../models/Restaurantes'
import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  title: string
  restaurantes: Restaurantes[]
}

const ProductsList = ({ title, restaurantes }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {restaurantes.map((restaurantes) => (
          <Product
            key={restaurantes.id}
            title={restaurantes.title}
            description={restaurantes.description}
            image={restaurantes.image}
            infos={restaurantes.infos}
            grade={restaurantes.grade}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
