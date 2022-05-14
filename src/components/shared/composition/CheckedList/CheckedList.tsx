import React, { FC } from "react";
import checkmark from "../../../../assets/checkmark.svg";

interface Props {
  completedTasks: string[];
}

const CheckedList: FC<Props> = ({ completedTasks }) => {
  const renderCompletedTask = (task: string, index: number) => (
    <div key={`task-${index}`} className="flex flex-row gap-1">
      <img src={checkmark} height="24" width="24" />
      <span className="truncate">{task}</span>
    </div>
  );

  return (
    <div className="flex flex-row gap-4 pt-8 lg:p-0">
      {completedTasks.map(renderCompletedTask)}
    </div>
  );
};

export { CheckedList };
