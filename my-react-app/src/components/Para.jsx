import './Para.css';
import ChatBot from './assets/chatbot.png';
import {TypeAnimation} from 'react-type-animation';
function Para(props) {
    if (props.indexImg === 1) {
        return (
            <div className='tester1'>
                <p>{props.content}</p>
                <img src={ChatBot} alt="BOT" className='ChatBot' />
            </div>
        );
    }
    else if (props.indexImg === 2) {
        return (
            <div className='tester2'>
                <img src={ChatBot} alt="BOT" className='ChatBot2' />
                <p>{props.content}</p>
            </div>
        );
    }
    else{
    return(
        <>
            <div className='tester0'>
                <img src={ChatBot} alt="BOT" className='ChatBot' />
                <TypeAnimation
                className='TypeAnimation' 
                splitter={
                    (str) => str.split(/(?= )/)
                }
                sequence={
                    [
                        props.content,
                    ]
                }
                speed={{ type: 'keyStrokeDelayInMs',value: 30 }}
                style={{fontSize: '1.5em', color: 'white'}}
                deletionSpeed={0}
                repeat={true}
                wrapper='span'
                />

                {/* <p>{props.content}</p> */}
            </div>
        </>
    );
    }
}


export default Para;