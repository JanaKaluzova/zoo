import { useState } from 'react'
import { Animal } from '../types'
import { AnimalForm } from './AnimalForm'
import './NewAnimal.css'

type Props = {
  onAddAnimal: (addAnimal: Animal) => void
}

export const NewAnimal = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveAnimalDataHandler = (enteredFormData: Animal) => {
    const formData = {
      ...enteredFormData,
    }
    props.onAddAnimal(formData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const cancelEditingHandler = () => {
    setIsEditing(false)
  }
  return (
    <div className="new-animal">
      {!isEditing && <button onClick={startEditingHandler}>Add New Animal</button>}
      {isEditing && <AnimalForm onSaveFormData={saveAnimalDataHandler} onCancel={cancelEditingHandler} />}
    </div>
  )
}
