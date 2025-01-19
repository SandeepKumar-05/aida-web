import './Intro.css';
import Para from './Para';
import introImage from './assets/image.png';

function Intro() {

    return (
        <>
            <div className='ImageHolder'>
                <img src={introImage} alt="AIDA Logo" className='introImage' />
            </div>
            <Para fontsize="36px" content="Welcome to the Artificial Intelligence and Data Science Association!We are thrilled to welcome you to our community of innovators, thinkers, and problem-solvers. AIDA is dedicated to creating a vibrant platform where AI and data science professionals, enthusiasts, and students can connect, collaborate, and grow together. Whether you're looking to expand your knowledge, advance your career, or contribute to the evolution of these transform."></Para>
            <Para fontsize="40px" content="Let's have a look on what's happening on AIDA" indexImg={3}></Para>
        </>
    );
}

export default Intro;