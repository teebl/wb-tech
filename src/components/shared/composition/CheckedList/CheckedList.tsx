import React, { FC } from "react";
import checkmark from "../../../../assets/checkmark.svg";

interface Props {
  completedTasks: string[];
}

const CheckedList: FC<Props> = ({ completedTasks }) => {
  const renderCompletedTask = (task: string, index: number) => (
    <div key={`task-${index}`} className="flex flex-row gap-1">
      <img src={checkmark} />
      <span>{task}</span>
    </div>
  );

  return (
    <div className="flex flex-row gap-4">
      {completedTasks.map(renderCompletedTask)}
    </div>
  );
};

export { CheckedList };
