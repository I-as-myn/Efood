import { MenuItem } from '../pages/Categories'

export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.priceItem)
  }, 0)
}

export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
