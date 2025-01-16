import './Intro.css';
import introImage from './assets/image.png';
import ChatBot from './assets/react.svg';

function Intro() {

    return (
        <>
            <div className='ImageHolder'>
                <img src={introImage} alt="AIDA Logo" className='introImage' />
            </div>
            <div className='IntroText'>
                <img src={ChatBot} alt="BOT" className='ChatBot' />
                <p>Welcome to the Artificial Intelligence and Data Science Association!We are thrilled to welcome you to our community of innovators, thinkers, and problem-solvers. AIDA is dedicated to creating a vibrant platform where AI and data science professionals, enthusiasts, and students can connect, collaborate, and grow together. Whether you're looking to expand your knowledge, advance your career, or contribute to the evolution of these transform.</p>
            </div>
        </>
    );
}

export default Intro;