import useCounter from '../hooks/useCounter'

const CounterCustomHook = () => {

    const { elementToAnimate, counter, handlerClick } = useCounter({})
    
    return(
        <>
            <h1>Counter</h1>
            <h2 ref={ elementToAnimate }> { counter } </h2>

            <button onClick={ handlerClick }>
                +1
            </button>
        </>
    )
}
export default CounterCustomHook