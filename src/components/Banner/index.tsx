import { Category, Container, Title } from './styles'

type BannerProps = {
  restaurantInfo: {
    nome: string
    categoria: string
  }
  backgroundImage: string
}

const Banner = ({ restaurantInfo, backgroundImage }: BannerProps) => (
  <Container backgroundImage={backgroundImage}>
    <div className="container">
      <Category>{restaurantInfo.categoria}</Category>
      <Title>{restaurantInfo.nome}</Title>
    </div>
  </Container>
)

export default Banner
