/*export type Species = {
  speciesName: string
  animals: Animal[]
}*/

export type Animal = {
  species: string
  name: string
  latinName: string
  origin: string
  age: number
  winterSleep: boolean
  otherInfo: InfoAboutAnimal
}

export type InfoAboutAnimal = {
  environment: string
  nutrition: string
}
