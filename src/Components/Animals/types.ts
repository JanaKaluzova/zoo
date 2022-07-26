export type Species = {
  name: string

  speciesType: Animal
  speciesType2: Animal
}

export type Animal = {
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
