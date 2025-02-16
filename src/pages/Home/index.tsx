import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'

import { useGetRestaurantesQuery } from '../../services/api'

export type ApiResponse = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
  destacado: boolean
}

const Home = () => {
  const { data, error, isLoading } = useGetRestaurantesQuery()

  const restaurantes = data
    ? data.map((restaurante) => ({
        id: restaurante.id,
        title: restaurante.titulo,
        description: restaurante.descricao,
        grade: restaurante.avaliacao,
        infos: [
          restaurante.destacado ? 'Destaque da semana' : '',
          restaurante.tipo
        ].filter(Boolean),
        image: restaurante.capa
      }))
    : []

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar os restaurantes</p>

  return (
    <>
      <Hero />
      <ProductsList restaurantes={restaurantes} title="Restaurantes" />
    </>
  )
}

export default Home
