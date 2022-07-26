import React from 'react'

import './App.css'
import { AnimalFilter } from './Components/Animals/AnimalFilter'
import { NewAnimal } from './Components/Animals/New Animal/NewAnimal'

import { Species } from './Components/Animals/types'
import { ZooSetup } from './Components/Animals/ZooSetup'

function App() {
  const zoo: Species[] = [
    {
      name: 'Predators',
      speciesType: {
        name: 'Kocka Evropska',
        latinName: 'Felis Catus',
        origin: 'Europe',
        age: 15,
        winterSleep: false,
        otherInfo: { environment: 'land', nutrition: 'carnivor' },
      },
      speciesType2: {
        name: 'Levhart Indicky',
        latinName: 'Panthera pardus fusca',
        origin: 'India',
        age: 30,
        winterSleep: false,
        otherInfo: { environment: 'land', nutrition: 'carnivor' },
      },
    },

    {
      name: 'Birds',
      speciesType: {
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
      speciesType2: {
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
    },
    {
      name: 'Rodents',
      speciesType: {
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
      speciesType2: {
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
    },
    {
      name: 'Mammals',
      speciesType: {
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
      speciesType2: {
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
    },
  ]
  return (
    <div className="App">
      <h1>ZOO</h1>
      <NewAnimal />

      <ZooSetup species={zoo} />
    </div>
  )
}

export default App
