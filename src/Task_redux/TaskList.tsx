import React from "react";
import { connect } from "react-redux";
import Task, { ITask } from "./Task";
import "../index.css";
import { archiveTask, pinTask } from "../redux/actions";

export interface TaskListProp {
  loading?: boolean;
  tasks: ITask[];
  onPinTask: Function;
  onArchiveTask: Function;
}

export const PureTaskList = (props: TaskListProp) => {
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

const mapStateToProps = ({ tasks }: TaskListProp) => ({
  tasks: tasks
});
const dispatchProps = (dispatch: any) => ({
  onArchiveTask: (id: string) => dispatch(archiveTask(id)),
  onPinTask: (id: string) => dispatch(pinTask(id))
});

export default connect(mapStateToProps, dispatchProps)(PureTaskList);
