class Menu {
  title: string
  description: string
  description2?: string
  description3?: string
  image: string
  priceItem?: number
  id: number

  constructor(
    id: number,
    description: string,
    description2: string,
    description3: string,
    title: string,
    priceItem: number,
    image: string
  ) {
    this.id = id
    this.description = description
    this.description2 = description2
    this.description3 = description3
    this.title = title
    this.image = image
    this.priceItem = priceItem
  }
}

export default Menu
