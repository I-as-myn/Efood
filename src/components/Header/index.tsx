import { Link } from 'react-router-dom'

import { HeaderBar, CartButton, LinkItem, Links, Logo } from './styles'

import fundo from '../../assets/image/fundo.png'
import logo from '../../assets/image/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
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
            <CartButton onClick={openCart}>
              {items.length} - produto(s) no carrinho
            </CartButton>
          </Links>
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header
