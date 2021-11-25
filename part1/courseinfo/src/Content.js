import React from "react";
import Part from "./Part"

const Content = (props) => {
  
    return (
        <div>

            
            <Part part={props.parts} exercises={props.parts.exercises}/>
            <Part part={props.parts.name} exercises={props.parts.exercises}/>
            <Part part={props.parts.name} exercises={props.parts.exercises}/>     
        </div>
    )
}

export default Content
