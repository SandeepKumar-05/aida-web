import Header from "./components/Header"
import Footer from "./components/Footer";
import Food from "./components/Food";
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
        content="Our mission is to empower our community by providing domain-specific knowledge, resources, and practical learning opportunities in artificial intelligence and data science. We aim to foster collaboration, innovation, and professional growth through workshops, events, networking opportunities, and hands-on projects, ensuring that our members are well-equipped to drive the future of these transformative fields."
        />
        <ChatQuestion
        content="'' What's your grand vision, AIDA? Any AI revolutions planned? ''" 
        />
        <ChatAnswer
        content="Our vision is to build a global network of AI and data science professionals who are equipped with the latest tools and insights to solve real-world challenges. We strive to be the leading platform for knowledge exchange, professional development, and career advancement in these rapidly evolving fields, fostering a Our vision is to build a global network of AI and data science professionals who are equipped with the latest tools and insights to solve real-world challenges. We strive to be the leading platform for knowledge exchange, professional development, and career advancement in these rapidly evolving fields, fostering a community that thrives on creativity, inclusivity, and forward-thinking solutions. that thrives on creativity, inclusivity, and forward-thinking solutions."
        />
        <ChatQuestion
        content="'' What's your origin story? Every hero has one! ''" 
        />
        <ChatAnswer
        content="Founded in 2020, the Artificial Intelligence and Data Science Association was established with the goal of bridging the gap between academic research and industry applications. From our early days, we have focused on fostering collaboration among AI and data science professionals, creating a space where members can grow their knowledge and share insights. Over the years, AIDA has expanded its reach, hosting workshops, conferences, and hackathons that continue to shape the landscape of AI and data science. Today, we are proud to be a leading association, supporting the ongoing advancement of AI and data science across industries worldwide."
        />
        <Para fontsize="30px" content="The core team serves as the backbone of our organization, guiding its growth, shaping its vision, and ensuring the successful implementation of its initiatives.meet our core team"/>
        {/* <Members /> */}
      </div>
    );
}

export default App
