import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'
import Header from './Header'
import { AiFillGithub } from "react-icons/ai";

function Project() {
  //  const Project=eventData;
  return (

    <>
      <Header />

      <div className="mainCont">
        <div className="select-container" aria-label="Year selectors">
          <select className="year-select" aria-label="Select Year 1">
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className="subCont">
          <div className="img_side">
            <img src='src/components/assets/ardnio.webp' alt="img" />
          </div>
          <div className="content">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi sed asperiores atque? Pariatur magnam maiores consequatur molestias fugit minus eius quidem natus quia! Blanditiis numquam nisi earum nesciunt cupiditate.</p>
            <Link to='https://github.com/Sandeepkumarps/Ds-Lab'><AiFillGithub className='git' /> </Link>
          </div>
        </div>

        <div className="subCont">
          <div className="img_side">
            <img src='src/components/assets/ardnio.webp' alt="img" />
          </div>
          <div className="content">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi sed asperiores atque? Pariatur magnam maiores consequatur molestias fugit minus eius quidem natus quia! Blanditiis numquam nisi earum nesciunt cupiditate.</p>
            <Link to='https://github.com/Sandeepkumarps/Ds-Lab'><AiFillGithub className='git' /> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
