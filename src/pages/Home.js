import React, { useState } from 'react'
import { ListCard } from '../components/ListCard'

export const Home = () => {
  const [region, setRegion] = useState('all')

  const onChange = (e) => {
    console.log(e.target.value);
    setRegion(e.target.value)
  }

  return (
    <React.Fragment>
      <div className='container'>
        <div className='row justify-content-between m-3'>
          <input type="text" style={{ maxWidth: '200px' }} />
          <select defaultValue='All' class="form-select" aria-label="Default select example" style={{ maxWidth: '200px' }} onChange={onChange}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <ListCard paisId={region} />
      </div>
    </React.Fragment>
  )
}