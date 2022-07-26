import React, { useState } from 'react'
import './AnimalForm.css'
import { EnteredFormData } from './NewAnimal'

export type Props = {
  onSaveFormData: (data: EnteredFormData) => void
}

export const AnimalForm = (props: Props) => {
  const [enteredName, setEntederName] = useState('')
  const [enteredlatinName, setEnteredlatinName] = useState('')
  const [enteredorigin, setEnteredorigin] = useState('')
  const [enteredage, setEnteredAge] = useState('')
  const [selectedSpecies, setSelectedSpecies] = useState('')
  const [selectedWinterSleep, setSelectedWinterSleep] = useState('')
  const [selectedEnvironment, setSelectedEnvironment] = useState('')
  const [selectedNutrition, setSelectedNutrition] = useState('')

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntederName(event.target.value)
  }

  const latinNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredlatinName(event.target.value)
  }

  const originChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredorigin(event.target.value)
  }

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value)
  }

  const speciesChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecies(event.target.value)
  }

  const winterSleepHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWinterSleep(event.target.value)
  }

  const environmentChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEnvironment(event.target.value)
  }

  const nutritionChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNutrition(event.target.value)
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = {
      name: enteredName,
      latinName: enteredlatinName,
      origin: enteredorigin,
      age: enteredage,
    }

    props.onSaveFormData(formData)
    setSelectedSpecies('')
    setEntederName('')
    setEnteredlatinName('')
    setEnteredorigin('')
    setEnteredAge('')
    setSelectedWinterSleep('')
    setSelectedEnvironment('')
    setSelectedNutrition('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-animal__controls">
        <div className="new-animal__control">
          <label>Animal Species</label>
          <select value={selectedSpecies} onChange={speciesChangeHandler}>
            <option value="">--Choose--</option>
            <option value="Predators">Predators</option>
            <option value="Birds">Birds</option>
            <option value="Rodents">Rodents</option>
            <option value="Mammals">Mammals</option>
          </select>
        </div>
        <div className="new-animal__control">
          <label>Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="new-animal__control">
          <label>Latin Name</label>
          <input type="text" value={enteredlatinName} onChange={latinNameChangeHandler} />
        </div>
        <div className="new-animal__control">
          <label>Origin</label>
          <input type="text" value={enteredorigin} onChange={originChangeHandler} />
        </div>
        <div className="new-animal__control">
          <label>Age</label>
          <input type="number" min="1" step="1" value={enteredage} onChange={ageChangeHandler} />
        </div>
        <div className="new-animal__control">
          <label>Sleeps in Winter?</label>
          <select value={selectedWinterSleep} onChange={winterSleepHandler}>
            <option value="">--Choose--</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="new-animal__control">
          <h3>OTHER INFORMATION</h3>
          <label>Environment</label>
          <select value={selectedEnvironment} onChange={environmentChangeHandler}>
            <option value="">--Choose--</option>
            <option value="land">Land</option>
            <option value="air">Air</option>
            <option value="water">Water</option>
          </select>
        </div>
        <div className="new-animal__control">
          <label>Nutrition</label>
          <select value={selectedNutrition} onChange={nutritionChangeHandler}>
            <option value="">--Choose--</option>
            <option value="herbivore">Herbivore</option>
            <option value="omnivore">Omnivore</option>
            <option value="carnivore">Carnivore</option>
          </select>
        </div>
      </div>
      <div className="new-animal__actions">
        <button type="submit">Add animal</button>
      </div>
    </form>
  )
}
