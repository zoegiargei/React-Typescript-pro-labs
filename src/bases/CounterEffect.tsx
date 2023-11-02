import { useState } from 'react'

const MAX_VALUE = 10
const MIN_VALUE = 1

const CounterEffect = () => {
    
    const [ counterEffect, setCounterEffect] = useState(MIN_VALUE)

    const handlerClickCounter = (operator: string) => {
        switch (operator) {
            case '+':
                setCounterEffect( prev => Math.min(prev + 1, MAX_VALUE)) 
                break;

            case '-':
                setCounterEffect( prev => Math.max(prev - 1, MIN_VALUE)) 
                break;
        
            default:
                break;
        }
    }

    return(
        <>
            <h1>Counter Effect</h1>
            <button onClick={ () => handlerClickCounter('-') }> - </button>
                <span>{ counterEffect }</span>
            <button onClick={() => handlerClickCounter('+') }> + </button>
        </>
    )
}
export default CounterEffect