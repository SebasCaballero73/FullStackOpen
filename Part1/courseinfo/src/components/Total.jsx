import React from 'react'

const Total = (props) => {
    let total = 0
    props.contents.forEach((item) => {total += item.exercises})

    return (
        <div>
            <p>Total: {total}</p>
        </div>
    )
}

export default Total