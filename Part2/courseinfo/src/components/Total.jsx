import React from 'react'

const Total = ({ contents }) => {
    return (
        <div>
            <p><b>Total of exercises:</b> {contents.reduce((previousValue, currentItem) => previousValue += currentItem.exercises, 0)}</p>
        </div>
    )
}

export default Total