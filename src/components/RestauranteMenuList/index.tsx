import Menu from '../../models/Menu'
import RestauranteMenu from '../RestauranteMenu'

import { Container, List } from './styles'

type Props = {
  title: string
  menu: Menu[]
}

const RestauranteMenuList = ({ title, menu }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {menu.map((menu) => (
          <RestauranteMenu
            key={menu.id}
            title={menu.title}
            description={menu.description}
            image={menu.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestauranteMenuList
