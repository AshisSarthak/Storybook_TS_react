import React from "react";
import "../index.css";

export interface ITask {
  id: string;
  title: string;
  state: string;
  updatedAt?: Date;
}

export interface TaskProp {
  task: ITask;
  onArchiveTask: Function;
  onPinTask: Function;
}

export default function Task(prop: TaskProp) {
  const {
    task: { title, id, state },
    onArchiveTask,
    onPinTask
  } = prop;
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}
