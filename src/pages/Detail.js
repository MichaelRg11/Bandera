import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import url from './../config'
import { Back } from './style'
import { BsArrowLeft } from "react-icons/bs"
import { Loading } from './../assets/styles'

export const Detail = () => {
  const [country, setCountry] = useState([])
  const [loading, setLoading] = useState(true)

  let { name } = useParams()

  useEffect(() => {
    getCountriesAll()
  }, [])

  const getCountriesAll = async () => {
    await axios.get(`${url}/name/${name}?fullText=true`)
      .then(res => {
        const data = res.data;
        setCountry(data[0]);
        setLoading(false)
      })
  }

  if (loading) return <Loading />

  return (
    <React.Fragment>
      <div className='container mt-5 align-items-center' >
        <Back to='/home'><BsArrowLeft /> Back</Back>
        <div className='row' >
          <div className="col-sm-12 col-lg-6 col-md-12 col-xl-6 mt-3 mb-3">
            <img src={country.flag} alt="" style={{ width: '100%', minHeight: '300px', height: '100%' }} />
          </div>
          <div className="col-sm-6 col-lg-6 col-md-6 col-xl-6 mt-3 mb-3 align-self-center">

            <h1 className='fs-3 text mb-1'>{country.name}</h1>

            <div className='row'>
              <div className='col-md-6 col-xl-6'>
                <p className='fs-6 text'>Native name: {country.nativeName}</p>
                <p className='fs-6 text'>Population: {country.population}</p>
                <p className='fs-6 text'>Region: {country.region}</p>
                <p className='fs-6 text'>Sub Region: {country.subregion}</p>
              </div>
              <div className='col-md-6 col-xl-6'>
                <p className='fs-6 text'>Top Level Domain: {country.topLevelDomain}</p>
                <p className='fs-6 text'>Currencies: {country.currencies[0].name}</p>
                <p className='fs-6 text'>
                  Languages: {
                    `${country.languages[0].nativeName}, ${country.languages[0].name}, ${country.languages[0].iso639_2}, ${country.languages[0].iso639_1}`
                  }
                </p>
              </div>
            </div>

            <h2 className='fs-4 text mt-4'>Border Countries:</h2>
            <p className='fs-6 text'>{country.borders.map(item => { return (<span className="btn btn-light m-2">{item} </span>) })}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}