import React from 'react'
// import Navbar from './Navbar'
import Header from '../common/header/Header'

const Main1 = ({child}) => {
  return (
    <div>
        <Header/>
        {child}
    </div>
  )
}

export default Main1