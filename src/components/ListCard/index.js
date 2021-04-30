import React, { useState, useEffect } from 'react'
import { Card } from './../Card'
import url from './../../config'
import axios from 'axios'

export const ListCard = ({ paisId = false }) => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    if (paisId === false) {
      getCountriesAll()
    } else {
      getCountries()
    }
  }, [paisId])

  const getCountriesAll = async () => {
    const { data } = await axios.get(`${url}/all`)
    setCountries(data)
  }

  const getCountries = async () => {
    const { data } = await axios.get(`${url}/all`)
    setCountries(data)
  }

  return (
    <div className='row'>
      {
        countries.map((item) => {
          return (
            <Card key={item} {...item} />
          )
        })
      }
    </div>
  )
}