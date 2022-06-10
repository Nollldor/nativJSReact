import React from "react";
import {ManType} from "./07.test";

type PropsType = {
    title:string
    man: ManType
    food: Array<string>
    car: {model: string}
}

const ManComponent:React.FC<PropsType> = ({title, man:{name}, ...props})=>{


    return(
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{name}</div>
            <div>{props.food[0]}</div>
        </div>
    )
}