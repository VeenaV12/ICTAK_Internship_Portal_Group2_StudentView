import React from 'react'
// import Navbar from './Navbar'
// import Header from '../common/header/Header'
import Header2 from '../common/header2/Header2'

const Main2 = ({child}) => {
  return (
    <div>
        <Header2/>
        {child}
    </div>
  )
}

export default Main2