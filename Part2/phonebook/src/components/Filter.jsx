import React from 'react'

const Filter = ({ filter, setFilter}) => {
    return (
        <div>
            Filter by Name: <input value={filter} onChange={(event) => setFilter(event.target.value)} />
            <hr />
        </div>
    )
}

export default Filter