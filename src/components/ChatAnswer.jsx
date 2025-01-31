import './ChatAnswer.css'
import svg from "./assets/react.png"
import pic from "./assets/chatButtons.png"

function ChatAnswer(props) {
    return (
        <>
        <div className='chatWindowA'>
            <img className='botIcon' src={svg} alt='chat icon' />
            <div className='chatBoxA'>
                <p>{props.content}</p>
            </div>
        </div>
        {/* <img src={pic} className='chatButtons' alt='chat buttons'></img> */}
        </>
    );
}

export default ChatAnswer;