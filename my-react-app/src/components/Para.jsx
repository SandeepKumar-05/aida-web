import './Para.css';
import ChatBot from './assets/chatbot.png';
function Para(props) {

    return(
        <>
            <div className='IntroText'>
                <img src={ChatBot} alt="BOT" className='ChatBot' />
                <p>{props.content}</p>
            </div>
        </>
    );
}


export default Para;