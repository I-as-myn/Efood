import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'

type Restaurante = {
  id: number
  title: string
  grade: number
  description: string
  image: string
  infos: string[]
}

type ApiResponse = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
  destacado: boolean
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/restaurantes'
      )
      const data: ApiResponse[] = await response.json()

      const mappedData = data.map((restaurante) => ({
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

      setRestaurantes(mappedData)
    }

    fetchData()
  }, [])

  return (
    <>
      <Hero />
      <ProductsList restaurantes={restaurantes} title="Restaurantes" />
    </>
  )
}

export default Home
