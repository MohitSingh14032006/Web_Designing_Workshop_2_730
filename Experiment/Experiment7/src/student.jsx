import React from 'react'
import './index.css'

export default function student({name,course,marks}) {
  return (
    <div className='student-info'>
        <h2>{name}</h2>
        <p>
            Course: {course} <br />
            Marks: {marks}
        </p>
    </div>
  )
}
