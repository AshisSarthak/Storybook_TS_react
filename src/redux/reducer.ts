import { ITask } from "../Task/Task";
import { Action_TYPE, ARCHIVE_TASK, PIN_TASK } from "./actions";

// All our reducers simply change the state of a single task.
const taskStateReducer = (taskState: any) => {
  return (state: any, action: Action_TYPE) => {
    return {
      ...state,
      tasks: state.tasks.map((task: ITask) =>
        task.id === action.id ? { ...task, state: taskState } : task
      )
    };
  };
};

// The reducer describes how the contents of the store change for each action
export const reducer = (state: any, action: Action_TYPE) => {
  switch (action.type) {
    case ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};
