import React, { useState } from 'react'

import './App.css'

import { NewAnimal } from './Components/Animals/New Animal/NewAnimal'
import { Animal } from './Components/Animals/types'

import { ZooSetup } from './Components/Animals/ZooSetup'

const INITIAL_ZOO: Animal[] = [
  {
    species: 'Predators',
    name: 'Kocka Evropska',
    latinName: 'Felis Catus',
    origin: 'Europe',
    age: 15,
    winterSleep: false,
    otherInfo: { environment: 'land', nutrition: 'carnivor' },
  },
  {
    species: 'Predators',
    name: 'Levhart Indicky',
    latinName: 'Panthera pardus fusca',
    origin: 'India',
    age: 30,
    winterSleep: false,
    otherInfo: { environment: 'land', nutrition: 'carnivor' },
  },

  {
    species: 'Birds',
    name: 'Papousek Sedy',
    latinName: 'Psittacus erithacus',
    origin: 'Africa',
    age: 12,
    winterSleep: false,
    otherInfo: {
      environment: 'air',
      nutrition: 'omnivore',
    },
  },
  {
    species: 'Birds',
    name: 'Orel Morsky',
    latinName: 'Haliaeetus albicilla',
    origin: 'Russia',
    age: 40,
    winterSleep: false,
    otherInfo: {
      environment: 'air',
      nutrition: 'carnivore',
    },
  },

  {
    species: 'Rodents',
    name: 'Zajic Polni',
    latinName: 'Lepus europaeus',
    origin: 'Europe',
    age: 7,
    winterSleep: true,
    otherInfo: {
      environment: 'land',
      nutrition: 'herbivore',
    },
  },

  {
    species: 'Rodents',
    name: 'Mys Domaci',
    latinName: 'Mus musculus',
    origin: 'Europe',
    age: 1,
    winterSleep: false,
    otherInfo: {
      environment: 'land',
      nutrition: 'omnivore',
    },
  },

  {
    species: 'Mammals',
    name: 'Orangutan Sumatersky',
    latinName: 'Pongo abelii',
    origin: 'Indonesia',
    age: 50,
    winterSleep: false,
    otherInfo: {
      environment: 'land',
      nutrition: 'omnivore',
    },
  },

  {
    species: 'Mammals',
    name: 'Myval Severni',
    latinName: 'Procyon lotor',
    origin: 'America',
    age: 10,
    winterSleep: true,
    otherInfo: {
      environment: 'land',
      nutrition: 'omnivore',
    },
  },
]

function App() {
  const [zoo, setZoo] = useState(INITIAL_ZOO)

  const addAnimalHandler = (animal: Animal) => {
    setZoo((prevAnimals) => {
      return [animal, ...prevAnimals]
    })
  }

  return (
    <div className="App">
      <h1>ZOO</h1>
      <NewAnimal onAddAnimal={addAnimalHandler} />
      <ZooSetup species={zoo} />
    </div>
  )
}

export default App
