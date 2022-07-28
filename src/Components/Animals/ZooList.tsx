import './ZooList.css'

import { AnimalType } from './AnimalType'
import { Animal } from '../Animals/types'

type Props = {
  items: Animal[]
}

export const ZooList = (props: Props) => {
  if (props.items.length === 0) {
    return <h2 className="zoo-list__fallback">No Animals found</h2>
  }

  return (
    <div className="zoo-list">
      {props.items.map((species: Animal) => (
        <AnimalType key={species.latinName} animal={species} />
      ))}
    </div>
  )
}
