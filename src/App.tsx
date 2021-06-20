import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Button} from "./components/Button/Button";

//export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type ValueType = number;


function App() {

    const maxValue = 5;
    const InitValue = 0;

    let [value, setValue] = useState<ValueType>(InitValue);

    function IncCounter() {
        setValue(value + 1)
    }

    function ResetCounter() {
        setValue(0);
    }

    return (
        <div className={'App'}>
            <Counter value={value} maxValue={maxValue}/>
            <div className={'buttons'}>
                <Button
                    callBack={IncCounter}
                    value={value}
                    innerText={'inc'}
                    disableValue={maxValue}
                />
                <Button
                    callBack={ResetCounter}
                    value={value}
                    innerText={'reset'}
                    disableValue={InitValue}
                />
            </div>
        </div>
    );
}

export default App;
