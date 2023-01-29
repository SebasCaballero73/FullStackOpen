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
            <Part name={contents[0].name} exercises={contents[0].exercises}/>
            <Part name={contents[1].name} exercises={contents[1].exercises}/>
            <Part name={contents[2].name} exercises={contents[2].exercises}/>
        </div>
    )
}

export default Content