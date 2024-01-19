import React from 'react'
import logo from '../../assets/images/logo.png'

export default function Header() {
  return (
    <div className='Header'>
        <div className="header__container">

        <img className='logo' src={logo} alt="" />
        <ul className='header__list'>
            <li className="lists"><a href="">Home</a></li>
            <li className="lists"><a href="">Projects</a></li>
            <li className="lists"><a href="">Experience</a></li>
            <li className="lists"><a href="">Contact</a></li>
        </ul>
        </div>
    </div>
  )
}
