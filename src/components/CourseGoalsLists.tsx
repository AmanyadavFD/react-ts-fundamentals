import type { FC, ReactNode } from "react";
import type { CourseGoalT } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
type CourseGoalListProps = {
  goals: CourseGoalT[];
  handleDeleteGoal: (id: number) => void;
};
const CourseGoalsLists: FC<CourseGoalListProps> = ({
  goals,
  handleDeleteGoal,
}) => {
  let warningBox: ReactNode;

  if (goals.length === 0) {
    warningBox = (
      <InfoBox mode="hint">You have no course goals.Start adding some!</InfoBox>
    );
  }

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You'r collecting a lot of goals.Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <div>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              onDelete={handleDeleteGoal}
              id={goal.id}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalsLists;
