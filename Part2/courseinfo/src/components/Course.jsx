import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
  return (
    <div>
        <Header name={course.name}/>
        <Content contents={course.parts}/>
        <Total contents={course.parts} />
    </div>
  )
}

export default Course