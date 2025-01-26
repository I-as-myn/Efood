class Menu {
  title: string
  description: string
  image: string
  id: number

  constructor(id: number, description: string, title: string, image: string) {
    this.id = id
    this.description = description
    this.title = title
    this.image = image
  }
}

export default Menu
