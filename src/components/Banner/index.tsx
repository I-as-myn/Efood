import { Category, Container, Title } from './styles'

type BannerProps = {
  titulo: string
  tipo: string
  capa: string
}

const Banner = ({ titulo, tipo, capa }: BannerProps) => {
  console.log('Dados do Banner:', { titulo, tipo, capa })

  return (
    <Container backgroundImage={capa}>
      <div className="container">
        <Category>{tipo}</Category>
        <Title>{titulo}</Title>
      </div>
    </Container>
  )
}

export default Banner
