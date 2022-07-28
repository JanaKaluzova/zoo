import { AnimalFilter } from './AnimalFilter'
import { useState } from 'react'
import './ZooSetup.css'
import { Animal } from './types'

import { ZooList } from './ZooList'

type Props = {
  species: Animal[]
}

export const ZooSetup: React.FC<Props> = ({ species }) => {
  const [filteredSpecies, setFilteredSpecies] = useState('')

  const filterChangeHandler = (selectedSpecies: string) => {
    setFilteredSpecies(selectedSpecies)
  }

  const filteredAnimals =
    filteredSpecies === ''
      ? species
      : species.filter((species: Animal) => {
          return species.species.toLowerCase() === filteredSpecies.toLowerCase()
        })

  return (
    <>
      <div>
        <AnimalFilter onChangeFilter={filterChangeHandler} />
      </div>
      <div className="animalCard">
        <ZooList items={filteredAnimals} />
      </div>
    </>
  )
}
