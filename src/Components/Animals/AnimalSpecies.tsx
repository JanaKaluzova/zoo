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
      </div>
    </div>
  )
}
