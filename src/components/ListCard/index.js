import React, { useState, useEffect } from 'react'
import { Card } from './../Card'
import url from './../../config'
import axios from 'axios'
import { Loading } from './../../assets/styles'


export const ListCard = ({ paisId = 'all', name = '' }) => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (paisId === 'all') {
      getCountriesAll()
    } else if (paisId !== '') {
      getCountriesRegion()
    }

    if (name !== '') {
      getCountriesName()
    }
  }, [paisId, name])

  const getCountriesAll = async () => {
    await axios.get(`${url}/${paisId}`)
      .then(res => {
        const data = res.data;
        setCountries(data)
        setLoading(false)
      })
  }

  const getCountriesRegion = async () => {
    await axios.get(`${url}/region/${paisId}`)
      .then(res => {
        const data = res.data;
        setCountries(data)
        setLoading(false)
      })
  }

  const getCountriesName = async () => {
    await axios.get(`${url}/name/${name}`)
      .then(res => {
        const data = res.data;
        setCountries(data)
        setLoading(false)
      })
  }

  if (loading) return <Loading />

  return (
    <div className='row'>
      {
        countries.map((item) => {
          return (
            <Card key={item.name} {...item} />
          )
        })
      }
    </div>
  )
}