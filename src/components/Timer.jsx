import { useState, useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Timer() {
    const [time, setTime] = useState(1500);
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState('Let the countdown begin!')

    useEffect(() => {
        let interval = null;
        if (active) {
            interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
            if (time === 0) {
                setActive(false);
                setTime(0);
            }
        }
        else if (!active && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active, time]);

    function HandleStartStop(){
        setMessage(active ? 'Keep it going!' : 'You are doing great!')
        setActive(!active);
    }

    function HandleReset(){
        setMessage('Ready to go for another round?');
        if(active)
        setActive(false);
        setTime(1500);
    }

    let buttonStyle = 'm-2 py-1 px-4 rounded border-0';

    return (
        <div style={{fontFamily: 'Major Mono Display',backgroundColor: '#87d7cc',color:'#2c888d', height: '100vh', fontSize: '7rem' }} className='d-flex flex-column justify-content-center align-items-center bg-gradient'>
            <h1 className='text-center'>{message}</h1>
            <div className='d-flex justify-content-center align-items-center'>
                {Math.floor(time / 60) < 10 ? 0 : null}{Math.floor(time / 60)}:{(time % 60) < 10 ? 0 : null}{time % 60}
            </div>
            <div style={{fontSize: '2rem' }} className='d-flex justify-content-center align-items-center' >
                <button style={{backgroundColor: '#cfcada'}} className={buttonStyle} onClick={HandleStartStop} >{active ? 'stop' :  'start'}</button>
                <button style={{backgroundColor: '#cfcada'}} className={buttonStyle} onClick={HandleReset}>reset</button>    
            </div>
        </div>
    )
}
