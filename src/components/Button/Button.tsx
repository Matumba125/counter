import React from 'react';
import {ValueType} from "../../App";


type ButtonPropsType={
    callBack: ()=> void
    value: ValueType
    innerText: string
    disableValue:ValueType
}

export function Button(props: ButtonPropsType){
    return (
        <div>
            <button onClick={props.callBack} disabled={props.value === props.disableValue}>{props.innerText}</button>
        </div>
    );
};