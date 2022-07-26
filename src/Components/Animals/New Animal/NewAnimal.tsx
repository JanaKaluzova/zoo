import { AnimalForm } from './AnimalForm'
import './NewAnimal.css'

export type EnteredFormData = {
  name: string
  latinName: string
  origin: string
  age: string
}

export const NewAnimal = () => {
  const saveAnimalDataHandler = (enteredFormData: EnteredFormData) => {
    const formData = {
      ...enteredFormData,
    }
  }
  return (
    <div className="new-animal">
      <AnimalForm onSaveFormData={saveAnimalDataHandler} />
    </div>
  )
}
