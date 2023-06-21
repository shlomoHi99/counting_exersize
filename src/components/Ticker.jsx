import { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Ticker() {
    const [timer, setTimer] = useState(0);

    setTimeout(function () {
        setTimer(timer + 1);
    }, 1000)
    
    return (
        <div style={{height:'100vh', fontSize:'7rem'}} className='bg-primary text-white bg-gradient d-flex justify-content-center align-items-center'>
            {Math.floor(timer / 60)}:{Math.floor(timer % 60) < 10 ? 0 : null}{timer % 60}
        </div>
    )
}
