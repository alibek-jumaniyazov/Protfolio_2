import React from 'react'

export default function Project({item}) {
    return (
        <div className='Project'>
            <img src={item.img} alt="" />
            <div className="projectInfo">
                <span>{item.title}</span>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}
