import React from "react";

import Task, { ITask } from "./Task";
import "../index.css";

export interface TaskListProp {
  loading?: boolean;
  tasks: ITask[];
  onPinTask: Function;
  onArchiveTask: Function;
}

const TaskList = (props: TaskListProp) => {
  const { loading, tasks, onPinTask, onArchiveTask } = props;
  const events = {
    onPinTask,
    onArchiveTask
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default TaskList;
