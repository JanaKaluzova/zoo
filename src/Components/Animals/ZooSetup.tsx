import { AnimalSpecies } from './AnimalSpecies'
import { Species } from '../Animals/types'
import { AnimalFilter } from './AnimalFilter'
import { useState } from 'react'
import './ZooSetup.css'

type Props = {
  species: Species[]
}

export const ZooSetup: React.FC<Props> = ({ species }) => {
  const [filteredSpecies, setFilteredSpecies] = useState('')
  const filterChangeHandler = (selectedSpecies: string) => {
    setFilteredSpecies(selectedSpecies)
  }
  return (
    <>
      <div>
        <AnimalFilter onChangeFilter={filterChangeHandler} />
      </div>
      <div className="animalCard">
        <AnimalSpecies
          name={species[0].name}
          speciesType={species[0].speciesType}
          speciesType2={species[0].speciesType2}
        />
        <AnimalSpecies
          name={species[1].name}
          speciesType={species[1].speciesType}
          speciesType2={species[1].speciesType2}
        />
        <AnimalSpecies
          name={species[2].name}
          speciesType={species[2].speciesType}
          speciesType2={species[2].speciesType2}
        />
        <AnimalSpecies
          name={species[3].name}
          speciesType={species[3].speciesType}
          speciesType2={species[3].speciesType2}
        />
      </div>
    </>
  )
}
