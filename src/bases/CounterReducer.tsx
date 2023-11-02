import { useReducer } from "react"

interface counterState {
    counter : number
    previous: number
    changes : number
}

const INITIAL_STATE: counterState = {
    counter : 10,
    previous: 10,
    changes : 0
}

type counterAction = 
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

const counterReducer = (state: counterState, action: counterAction): counterState => {
    
    switch (action.type) {
        
        case 'reset':
            return {
                counter : 0,
                previous: 0,
                changes : 0
            }
        case 'increaseBy':
            return {
                counter : state.counter + action.payload.value,
                previous: state.counter,
                changes : state.changes + 1
            }

        default:
            return state
    }
}

const CounterReducerComponent = () => {


    const [ { counter, previous }, dispatch ] = useReducer(counterReducer, INITIAL_STATE)

    const handlerReset = () => {
        dispatch({
            type: 'reset'
        })
    }

    const handlerIncrease = ( value: number) => {
        dispatch({
            type: 'increaseBy',
            payload: { value }
        })
    }

    return(
        <>
            <h1>Counter Reducer: { counter }</h1>
            <h1>Previous value: { previous }</h1>

            <button onClick={ () => handlerIncrease(1) } >
                +1
            </button>

            <button onClick={ () => handlerIncrease(5) } >
                +5
            </button>

            <button onClick={ handlerReset } >
                Reset
            </button>
        </>
    )
}

export default CounterReducerComponent