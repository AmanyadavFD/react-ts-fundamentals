// import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import GlobalImg from "./assets/goals.jpg";
import CourseGoalsLists from "./components/CourseGoalsLists";
import NewGoals from "./components/NewGoals";
import { useState } from "react";

export type CourseGoalT = {
  id: number;
  title: string;
  description: string;
};
// const goalsData: CourseGoalT[] = [
//   {
//     id: Math.random(),
//     title: "Learn JavaScript Fundamentals",
//     description:
//       "Understand variables, functions, loops, and basic concepts of JavaScript.",
//   },
//   {
//     id: Math.random(),
//     title: "Build a React Project",
//     description:
//       "Create a small React app using components, props, and state management.",
//   },
//   {
//     id: Math.random(),
//     title: "Master CSS Layouts",
//     description:
//       "Practice Flexbox and Grid to build responsive and modern layouts.",
//   },
//   {
//     id: Math.random(),
//     title: "Learn Node.js",
//     description: "Understand backend development using Node.js and Express.",
//   },
//   {
//     id: Math.random(),
//     title: "Prepare for Frontend Interviews",
//     description:
//       "Revise JavaScript, React, and system design basics with mock interviews.",
//   },
// ];

function App() {
  const [goalsData, setGoalsData] = useState<CourseGoalT[]>([]);

  const handlerAddGoal = (goal: CourseGoalT) => {
    setGoalsData((prev) => [...prev, goal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoalsData((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <>
      <main>
        <Header image={{ src: GlobalImg, alt: "A List of goals" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoals onAddGoal={handlerAddGoal} />
        <CourseGoalsLists
          goals={goalsData}
          handleDeleteGoal={handleDeleteGoal}
        />
      </main>
    </>
  );
}

export default App;
