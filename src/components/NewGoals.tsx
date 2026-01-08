import { useState, type FC, type FormEvent, type ChangeEvent } from "react";
import type { CourseGoalT } from "../App";

type NewGoalProps = {
  onAddGoal: (goal: CourseGoalT) => void;
};

type NewGoalData = {
  title: string;
  description: string;
};

const NewGoals: FC<NewGoalProps> = ({ onAddGoal }) => {
  const [userData, setUserData] = useState<NewGoalData>({
    title: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newGoal: CourseGoalT = {
      id: Math.random(),
      title: userData.title,
      description: userData.description,
    };
    onAddGoal(newGoal);

    setUserData({ title: "", description: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="goal">Your Goal:</label>
          <input
            id="goal"
            type={"text"}
            name="title"
            onChange={handleChange}
            value={userData.title}
          />
        </p>
        <p>
          <label htmlFor="summary">Your Goal:</label>
          <input
            id="summary"
            type={"text"}
            name="description"
            value={userData.description}
            onChange={handleChange}
          />
        </p>
        <p>
          <button type="submit">Add Goal</button>
        </p>
      </form>
    </>
  );
};
export default NewGoals;
