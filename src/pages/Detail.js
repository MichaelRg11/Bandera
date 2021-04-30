import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import url from './../config'
import { Back } from './style'
import { BsArrowLeft } from "react-icons/bs"

export const Detail = () => {
  const [country, setCountry] = useState([])

  let { name } = useParams()

  useEffect(() => {
    getCountriesAll()
  }, [])



  const getCountriesAll = async () => {
    const { data } = await axios.get(`${url}/name/${name}?fullText=true`)
    setCountry(data[0])
  }

  return (
    <React.Fragment>
      { country ?
        (
          <div className='container mt-5 align-items-center' >
            <Back to='/home'><BsArrowLeft /> Back</Back>
            <div className='row' >
              <div className="col-sm-12 col-lg-12 col-md-6 col-xl-6 mt-3 mb-3">
                <img src={country.flag} alt="" style={{ width: '100%', minHeight: '300px', height: '100%' }} />
              </div>
              <div className="col-sm-12 col-lg-12 col-md-6 col-xl-6 mt-3 mb-3 align-self-center">
                <h1 className='fs-4 text'>{country.name}</h1>
                <div className='row'>
                  <div className='col-md-6 col-xl-6'>
                    <p className='fs-6 text'>Native name: {country.nativeName}</p>
                    <p className='fs-6 text'>Population: {country.population}</p>
                    <p className='fs-6 text'>Region: {country.region}</p>
                    <p className='fs-6 text'>Sub Region: {country.subregion}</p>
                  </div>
                  <div className='col-md-6 col-xl-6'>
                    <p className='fs-6 text'>Top Level Domain: {country.topLevelDomain}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>cargando...</h1>
        )
      }
    </React.Fragment>
  )
}