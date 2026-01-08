import type { FC, ReactNode } from "react";

type CourseGoalDataTyep = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};
const CourseGoal: FC<CourseGoalDataTyep> = ({
  title,
  children,
  id,
  onDelete,
}) => {
  return (
    <>
      <article>
        <div>
          <h2>{title}</h2>
          {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </article>
    </>
  );
};
export default CourseGoal;
