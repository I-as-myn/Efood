import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import RestauranteMenuList from '../../components/RestauranteMenuList'

type MenuItem = {
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

type ApiRestaurant = {
  id: number
  nome: string
  imagemFundo: string
  categoria: string
  cardapio: ApiMenuItem[]
}

const Categories = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<MenuItem[]>([])
  const [restaurantInfo, setRestaurantInfo] = useState<ApiRestaurant | null>(
    null
  )
  const [loading, setLoading] = useState<boolean>(true)

  const fetchRestaurantData = async (restaurantId: string | undefined) => {
    if (!restaurantId) return

    try {
      const response = await fetch(
        `https://fake-api-tau.vercel.app/api/efood/restaurantes/${restaurantId}`
      )
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do restaurante')
      }
      const data = await response.json()

      setRestaurantInfo({
        id: data.id,
        nome: data.titulo,
        imagemFundo: data.capa,
        categoria: data.tipo,
        cardapio: data.cardapio
      })

      if (data.cardapio) {
        const mappedMenu = data.cardapio.map((item: ApiMenuItem) => ({
          id: item.id,
          title: item.nome,
          description: item.descricao,
          description2: item.descricao,
          description3: item.porcao,
          image: item.foto,
          priceItem: item.preco
        }))
        setMenu(mappedMenu)
      }

      setLoading(false)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRestaurantData(id)
  }, [id])

  return (
    <>
      <Header />
      {restaurantInfo && (
        <Banner
          restaurantInfo={{
            nome: restaurantInfo.nome,
            categoria: restaurantInfo.categoria
          }}
          backgroundImage={restaurantInfo.imagemFundo}
        />
      )}
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <RestauranteMenuList menu={menu} title="" />
      )}
    </>
  )
}

export default Categories
