import './ChatQuestion.css'

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