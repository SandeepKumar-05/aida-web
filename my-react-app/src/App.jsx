import Header from "./components/Header"
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Para from "./components/Para";
import './App.css';
import Recent from "./components/Recent";
import ChatQuestion from "./components/ChatQuestion";
import ChatAnswer from "./components/ChatAnswer";
import Members from "./components/Members";


function App() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Recent />
        <ChatQuestion 
        content="'' Hey AIDA, what's your life goal? Are you trying to conquer the world or just make it smarter? ''" 
        />
        <ChatAnswer
        content="Creating ethical leaders in the domain of Artificial intelligence and data Science through effectual teaching and learning process to develop emerging technology solutions for the benefits of industry and society with a focus on holistic learning and excellence."
        />
        <ChatQuestion
        content="'' What's your grand vision, AIDA? Any AI revolutions planned? ''" 
        />
        <ChatAnswer
        content="Strengthening basic competencies in the domains of Artificial Intelligence and Data Science. Providing high-quality, value-based technical education and developing technology professionals with creative ideas and compelling leadership abilities. Using logical thinking to create and develop cutting-edge products in collaboration with industry stakeholders in order to meet global expectations and requirements. Enabling graduates to adapt to new technologies via strong fundamentals and lifetime learning."
        />
        <ChatQuestion
        content="'' What's your origin story? Every hero has one! ''" 
        />
        <ChatAnswer
        content="The Department of Artificial Intelligence & Data Science at Jyothi Engineering College was established in 2020 and is affiliated with KTU University, marking it as one of the first departments to introduce this course. Here, we seamlessly integrate Computer Science fundamentals with the cutting-edge realms of AI and Data Science.
Our accomplished faculty, seasoned experts in both AI and Computer Science, ensure a well-rounded education, bringing a perfect blend of theoretical knowledge and practical industry insights to offer students a holistic understanding of technology in our dynamic department.
Immerse yourself in a dynamic learning environment at our department, where well-established labs, equipped with state-of-the-art technology, cater to both Computer Science and AI requirements. Benefit from air-conditioned classrooms fostering academic excellence, ensuring mastery of fundamentals while staying at the forefront of technological advancements. Engage in groundbreaking research projects led by faculty members excelling in both AI and Computer Science, showcasing our commitment to innovation and offering diverse exploration, from classic algorithms to the latest advancements in artificial intelligence."
        />
        <Para fontsize="30px" content="The core team serves as the backbone of our organization, guiding its growth, shaping its vision, and ensuring the successful implementation of its initiatives.meet our core team"/>
        {/* <Members /> */}
        <Members />
        <Footer />
      </div>
    );
}

export default App
