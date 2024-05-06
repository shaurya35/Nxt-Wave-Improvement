import React from 'react'
import newfile from '../assets/newfile.jpg'
import logo from '../assets/logo.svg'
import './Prev.css'

const Prev = () => {
  return (
    <>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <br />
        <hr />
        <br />
        <div className="oldimage">
            <img src={newfile} alt="" className='oldimg'/>
        </div>
        <br />
        <hr />
        <br />
    </>
    
  )
}

export default Prev
