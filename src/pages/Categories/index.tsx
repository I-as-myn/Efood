import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import RestauranteMenuList from '../../components/RestauranteMenuList'

import { useGetRestauranteQuery } from '../../services/api'

export type MenuItem = {
  id: number
  title: string
  description: string
  description2?: string
  description3?: string
  image: string
  priceItem: number
}

type ApiMenuItem = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type ApiRestaurant = {
  id: number
  titulo: string
  destaque: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ApiMenuItem[]
}

const Categories = () => {
  const { id } = useParams() //pega o id do restaurante

  // Busca os dados do restaurante
  const {
    data: restauranteData,
    error: restauranteError,
    isLoading: isRestauranteLoading
  } = useGetRestauranteQuery(id || '') // Busca um único restaurante com base no ID

  console.log('Dados do restaurante:', restauranteData) // Log para depuração

  // Mapeia os itens do cardápio
  const menu = restauranteData?.cardapio
    ? restauranteData.cardapio.map((item: ApiMenuItem) => ({
        id: item.id,
        title: item.nome,
        description: item.descricao,
        description2: item.descricao,
        description3: item.porcao,
        image: item.foto,
        priceItem: item.preco
      }))
    : []

  if (isRestauranteLoading) return <p>Carregando dados...</p>
  if (restauranteError) return <p>Erro ao carregar os dados</p>

  return (
    <>
      <Header />
      {restauranteData && (
        <>
          <Banner
            titulo={restauranteData.titulo}
            tipo={restauranteData.tipo}
            capa={restauranteData.capa}
          />
          <RestauranteMenuList menu={menu} title="" />
        </>
      )}
    </>
  )
}

export default Categories
