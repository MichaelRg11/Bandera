import React, { useState } from 'react'
import { ListCard } from '../components/ListCard'
import { BsSearch } from "react-icons/bs"

export const Home = () => {
  const [region, setRegion] = useState('all')
  const [name, setName] = useState('')

  const onChange = (e) => {
    setRegion(e.target.value)
    setName('')
  }

  const onChangeSerch = (e) => {
    setName(e.target.value)
  }



  return (
    <React.Fragment>
      <div className='container'>

        <div className='row align-items-center m-3'>

          <div className="col-md-6">
            <div className="input-group  me-auto" style={{ maxWidth: '300px' }}>
              <span class="input-group-text" id="basic-addon1"><BsSearch /></span>
              <input type="text" className="form-control" placeholder="Buscar" value={name} onChange={onChangeSerch} />
            </div>
          </div>

          <div className="col-md-6">
            <select defaultValue='All' className="form-select ms-auto" aria-label="Default select example" style={{ maxWidth: '200px' }} onChange={onChange}>
              <option value="all">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>

        </div>
        <ListCard paisId={region} name={name} />
      </div>
    </React.Fragment>
  )
}