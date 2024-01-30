import React, { useState } from 'react'
import img1 from '../../assets/images/projectImg1.png'
import img2 from '../../assets/images/projectImg2.png'
import Project from '../Projects/Project'

export default function Projects() {

    const [projectInfo, setProjectInfo] = useState([
        {
            id: 1,
            img: img1,
            title: "Online Shoppping sayt",
            desc: "Bu shopping sayt da hohlagan tavarni sotib olishingiz mumkin"
        },
        {
            id: 2,
            img: img2,
            title: "Online Shoppping sayt",
            desc: "Bu shopping sayt da hohlagan tavarni sotib olishingiz mumkin"
        },
    ])

    return (
        <div className='Projects'>
            <h1>Projects</h1>
            <div className="allProject">
                {
                    projectInfo.map((item) => (
                        <Project item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}
