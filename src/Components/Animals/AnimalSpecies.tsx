<<<<<<< HEAD
export {}
/*
import { AnimalType } from '../Animals/AnimalType'

import './AnimalSpecies.css'
import { Animal } from '../Animals/types'

type Props = {
  species: Animal
}
export const AnimalSpecies: React.FC<Props> = ({ species }) => {
  return (
    <div className="mainFrame">
      <h3 className="name">{species.species}</h3>
      <div className="animalContainer">
        {species.species((animal) => (
          <AnimalType animal={animal} />
        ))}
=======
import { AnimalType } from '../Animals/AnimalType'
import { Species } from '../Animals/types'
import './AnimalSpecies.css'

export const AnimalSpecies: React.FC<Species> = ({ name, speciesType, speciesType2 }) => {
  return (
    <div className="mainFrame">
      <h3 className="name">{name}</h3>
      <div className="animalContainer">
        <AnimalType
          name={speciesType.name}
          latinName={speciesType.latinName}
          origin={speciesType.origin}
          age={speciesType.age}
          winterSleep={speciesType.winterSleep}
          otherInfo={speciesType.otherInfo}
        />
        <AnimalType
          name={speciesType2.name}
          latinName={speciesType2.latinName}
          origin={speciesType2.origin}
          age={speciesType2.age}
          winterSleep={speciesType2.winterSleep}
          otherInfo={speciesType2.otherInfo}
        />
>>>>>>> 67dcb9755885d4ace0dcfa486d49b382533d6af7
      </div>
    </div>
  )
}
<<<<<<< HEAD
*/
=======
>>>>>>> 67dcb9755885d4ace0dcfa486d49b382533d6af7
