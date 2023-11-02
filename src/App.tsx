import Counter from './bases/Counter'
import CounterEffect from './bases/CounterEffect'
import CounterCustomHook from './bases/CounterCustomHook';
import CounterReducerComponent from './bases/CounterReducer';

function App() {
  return(
    <>
      <Counter initialValue={1} />
      <CounterEffect />
      <CounterCustomHook />
      <CounterReducerComponent />
    </>
  )
}
export default App
