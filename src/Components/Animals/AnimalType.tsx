import { AnimalInfo } from '../Animals/InfoAboutAnimal'
import { Animal } from '../Animals/types'
import './AnimalType.css'

type Props = {
  animal: Animal
}
export const AnimalType: React.FC<Props> = ({ animal }) => {
  return (
    <div className="animalType">
      <div>{animal.species}</div>
      <h4>{animal.name}</h4>
      <h4 className="latinName">{animal.latinName}</h4>
      <br></br>
      <div>Origin: {animal.origin}</div>
      <div>Age: {animal.age}</div>
      <div>Sleeps in winter: {String(animal.winterSleep)}</div>
      <AnimalInfo environment={animal.otherInfo.environment} nutrition={animal.otherInfo.nutrition} />
    </div>
  )
}
