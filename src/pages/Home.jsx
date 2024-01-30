import React from 'react'
import UserInfo from '../components/Home/UserInfo'
import ButtonsCV from '../components/Home/ButtonsCV'
import Skills from '../components/Home/Skills'
import Projects from '../components/Home/Projects'

export default function Home() {
  return (
    <div className='Home'>
       <UserInfo/>
       <ButtonsCV/>
       <Skills/>
       <Projects/>
    </div>
  )
}
