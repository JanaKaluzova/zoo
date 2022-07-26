import { AnimalInfo } from '../Animals/InfoAboutAnimal'
import { Animal } from '../Animals/types'
import './AnimalType.css'

export const AnimalType: React.FC<Animal> = ({ name, latinName, origin, age, winterSleep, otherInfo }) => {
  return (
    <div className="animalType">
      <h4>{name}</h4>
      <h4 className="latinName">{latinName}</h4>
      <br></br>
      <div>Origin: {origin}</div>
      <div>Age: {age}</div>
      <div>Sleeps in winter: {String(winterSleep)}</div>
      <AnimalInfo environment={otherInfo.environment} nutrition={otherInfo.nutrition} />
    </div>
  )
}
