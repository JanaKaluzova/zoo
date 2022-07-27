import React from 'react'
import './AnimalFilter.css'

type Props = {
  onChangeFilter: (filter: string) => void
}

export const AnimalFilter = (props: Props) => {
  const speciesChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event.target.value)
  }
  return (
    <div className="animal-filter">
      <div className="animal-filter__control">
        <label>Filter by Animal Species</label>
        <select onChange={speciesChangeHandler}>
          <option value="">All species</option>
          <option value="predators">Predators</option>
          <option value="birds">Birds</option>
          <option value="rodents">Rodents</option>
          <option value="mammals">Mammals</option>
        </select>
      </div>
    </div>
  )
}
