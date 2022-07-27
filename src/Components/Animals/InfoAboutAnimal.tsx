import { InfoAboutAnimal } from '../Animals/types'
import './InfoAboutAnimal.css'

export const AnimalInfo: React.FC<InfoAboutAnimal> = ({ environment, nutrition }) => {
  return (
    <div className="infoAboutAnimal">
      <h5>Other information about animal</h5>
      <div>Environment: {environment}</div>
      <div>Nutrition: {nutrition}</div>
    </div>
  )
}
