export interface IPokemon {
  id: number,
  name: string,
  url: string,
  appUrl?: string,
  stats: Array<Object>,
  sprites: {
    front_default: string
  }
  imageUrl: string
}
