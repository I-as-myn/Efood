import { Link } from 'react-router-dom'
import fundo from '../../assets/image/fundo.png'
import logo from '../../assets/image/logo.png'
import { HeaderBar, LinkCart, LinkItem, Links, Logo } from './styles'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <nav>
      <Links>
        <LinkItem>
          <Link to="/">Restaurantes</Link>
        </LinkItem>
        <div>
          <Link to="/">
            <Logo src={logo} alt="EFOOD" />
          </Link>
        </div>
        <LinkCart href="#">0 - produto(s) no carrinho</LinkCart>
      </Links>
    </nav>
  </HeaderBar>
)

export default Header
