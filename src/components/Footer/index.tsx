import { Container, FooterText, SocialMedia } from './styles'

import logo from '../../assets/image/logo.png'
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png'
import twitter from '../../assets/image/twitter.png'
import { Link } from 'react-router-dom'
import { Logo } from '../Header/styles'

const Footer = () => (
  <Container>
    <div>
      <Link to="/">
        <Logo src={logo} alt="EFOOD" />
      </Link>
    </div>
    <SocialMedia>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </SocialMedia>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterText>
  </Container>
)

export default Footer
