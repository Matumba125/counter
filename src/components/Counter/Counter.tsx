import React from 'react';
import {ValueType} from "../../App";

type CounterPropsType = {
    value: ValueType
    maxValue: number
}

export function Counter(props: CounterPropsType) {

    const CounterStyle = {
        color: props.value === props.maxValue ? 'red' : '',
        fontSize: props.value === props.maxValue ? '110px' : ''
    }

    return (
        <div style={CounterStyle} className={'counter'}>
            {props.value}
        </div>

    );
}