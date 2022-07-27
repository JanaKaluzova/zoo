import { Animal } from '../types'
import { AnimalForm } from './AnimalForm'
import './NewAnimal.css'

type Props = {
  onAddAnimal: (addAnimal: Animal) => void
}

export const NewAnimal = (props: Props) => {
  const saveAnimalDataHandler = (enteredFormData: Animal) => {
    const formData = {
      ...enteredFormData,
    }
    props.onAddAnimal(formData)
  }
  return (
    <div className="new-animal">
      <AnimalForm onSaveFormData={saveAnimalDataHandler} />
    </div>
  )
}
