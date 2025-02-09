import { HeroBar } from './styles'
import fundo from '../../assets/image/fundo.png'
import logo from '../../assets/image/logo.png'

const Hero = () => (
  <HeroBar style={{ backgroundImage: `url(${fundo})` }}>
    <img src={logo} alt="Efood" />
    <p>Viva experiências gastronômicas no conforto da sua casa</p>
  </HeroBar>
)

export default Hero
