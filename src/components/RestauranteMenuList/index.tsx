import Menu from '../../models/Menu'
import RestauranteMenu from '../RestauranteMenu'

import { Container, List } from './styles'

type Props = {
  title: string
  menu: Menu[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const RestauranteMenuList = ({ menu }: Props) => (
  <Container>
    <div className="container">
      <List>
        {menu.map((menu) => (
          <RestauranteMenu
            key={menu.id}
            title={menu.title}
            description={menu.description}
            image={menu.image}
            description2={menu.description2}
            description3={menu.description3}
            priceItem={menu.priceItem}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestauranteMenuList
