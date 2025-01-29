import './ChatQuestion.css'
import svg from "./assets/chat.svg"

function ChatQuestion(props) {
    return (
        <div className='chatWindowQ'>
            <div className='chatBoxQ'>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default ChatQuestion;