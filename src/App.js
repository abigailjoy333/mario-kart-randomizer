import React, { useState } from "react"
import "./App.css"
import courseList from "./courseList"

function App() {
  const [course, setCourse] = useState('');
  
  const randomCourse = () => {
    return courseList[Math.floor(Math.random() * courseList.length)]
  }

  const handleClick = () => {
    setCourse(randomCourse(courseList))
  }
  
  return (
    <div className="wrapper">
      <h1 className="rainbow-letters">MARIO KART 8 DELUXE COURSE RANDOMIZER</h1>
      <h3>you're gonna race:</h3>
      <h2 className="course">★ {course} ★</h2>
      <div>
        <button onClick={handleClick}>
          generate new course
        </button>
      </div>
    </div>
  )
}
  
export default App;
