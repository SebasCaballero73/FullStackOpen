import React from "react";

const Part = (props) => {
    return(
        <>
            <p>{props.name} {props.exercises}</p>
        </>
    )
}


const Content = ({ contents }) => {
    return(
        <div>
            {contents.map((item) => {
                return <Part name={item.name} exercises={item.exercises} key={item.id}/>
            })}
        </div>
    )
}

export default Content