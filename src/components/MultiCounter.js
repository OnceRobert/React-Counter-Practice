import CounterSizeGenerator from './CounterSizeGenerator'
import CounterGroup from './CounterGroup'
import {useState} from 'react'

function MultiCounter(){

    const [counterSize, setCounterSize] = useState(0);

    function updateCounterSize(counterSize) {
        setCounterSize(counterSize);
    }

    return(
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>
            
        </div>
    )
    
}

export default MultiCounter;