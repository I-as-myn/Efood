import { Container, List } from './styles'
import RestauranteMenu from '../RestauranteMenu'
import Menu from '../../models/Menu'

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

const RestauranteMenuList = ({ menu, title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {menu.map((item) => (
          <RestauranteMenu
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            priceItem={item.priceItem}
            description2={item.description2}
            description3={item.description3}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestauranteMenuList
