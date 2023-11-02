import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

interface CounterProps {
    maxCount?: number
}
const useCounter = ({ maxCount = 10 } : CounterProps) => {

    const [counter, setCounter] = useState(0)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const elementToAnimate = useRef<any>(null)

    const handlerClick = () => {
        setCounter(prev => Math.min( prev + 1, maxCount ))
    }

    const timeLine = useRef( gsap.timeline() )

    useLayoutEffect(() => {

        if ( !elementToAnimate ) return

        timeLine.current
            .to( elementToAnimate.current, { y: -10, duration: .3, ease: 'ease.out' } )
            .to( elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' } )
            .pause()

    }, [])

    useEffect(() => {
        
        counter > 0? timeLine.current.play(0) : timeLine.current.pause() 
    }, [counter])
    
    return{
        counter,
        handlerClick,
        elementToAnimate
    }
}
export default useCounter