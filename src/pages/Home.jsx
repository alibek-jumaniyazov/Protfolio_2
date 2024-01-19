import React from 'react'
import UserInfo from '../components/Home/UserInfo'
import ButtonsCV from '../components/Home/ButtonsCV'
import Skills from '../components/Home/Skills'

export default function Home() {
  return (
    <div className='Home'>
       <UserInfo/>
       <ButtonsCV/>
       <Skills/>
    </div>
  )
}
