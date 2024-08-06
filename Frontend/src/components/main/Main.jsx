import React from 'react'
// import Navbar from './Navbar'
import Header1 from '../common/header1/Header1'

const Main = ({child}) => {
  return (
    <div>
        <Header1/>
        {child}
    </div>
  )
}

export default Main