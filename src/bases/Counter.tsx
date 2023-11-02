import { useState } from 'react'

interface CounterProps {
    initialValue?: number // ? Sirve para que la propiedad sea opcional y no obligatoria
}

interface CounterState {
    counter: number,
    clicks: number
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
    
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    })

    const handlerClickCounter = (operator: string) => {
        switch (operator) {
            case '+':
                setCounterState( prev => ({
                    counter: prev.counter + 1,
                    clicks: prev.clicks + 1
                }))
                break;
            case '-':
                setCounterState( prev => ({
                    counter: Math.max(prev.counter - 1, 1),
                    clicks: prev.clicks + 1
                }))
                break;
            default:
                break;
        }
    }

    return(
        <>
            <h1>Counter</h1>
            <h3>Clicks { clicks }</h3>
            <button onClick={ () => handlerClickCounter('-') }> - </button>
                <span>{ counter }</span>
            <button onClick={() => handlerClickCounter('+') }> + </button>
        </>
    )
}
export default Counter