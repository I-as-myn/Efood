class Restaurantes {
  title: string
  grade: number
  description: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    grade: number,
    description: string,
    title: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.grade = grade
    this.description = description
    this.title = title
    this.image = image
    this.infos = infos
  }
}

export default Restaurantes
