export const ARCHIVE_TASK = "ARCHIVE_TASK";
export const PIN_TASK = "PIN_TASK";

export interface Action_TYPE {
  type: string;
  id: string;
}

// The action creators bundle actions with the data required to execute them
export const archiveTask = (id: string): Action_TYPE => ({
  type: ARCHIVE_TASK,
  id
});
export const pinTask = (id: string): Action_TYPE => ({ type: PIN_TASK, id });
