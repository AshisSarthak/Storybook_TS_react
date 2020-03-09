import React from "react";
import { storiesOf } from "@storybook/react";
import { specs, describe, it } from "storybook-addon-specifications";

import { shallow } from "enzyme";
import expect from "expect";

import { PureTaskList } from "./TaskList";
import { taskData, actionsData } from "./Tasks.stories";
import Task from "../Task/Task";

export default {
  component: PureTaskList,
  title: "redux/TaskList",
  decorators: [
    (story: any) => <div style={{ padding: "3rem" }}>{story()}</div>
  ],
  excludeStories: /.*Data$/
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" }
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }
];

export const Default = () => (
  <PureTaskList tasks={defaultTasksData} {...actionsData} />
);

export const WithPinnedTasks = () => (
  <PureTaskList tasks={withPinnedTasksData} {...actionsData} />
);

export const Loading = () => (
  <PureTaskList loading tasks={[]} {...actionsData} />
);

export const Empty = () => <PureTaskList tasks={[]} {...actionsData} />;

// Custom stories using Enzyme

const stories = storiesOf("redux/TaskList", module);

stories.add("Task List Pinned", function() {
  const story = <PureTaskList tasks={withPinnedTasksData} {...actionsData} />;

  specs(() =>
    describe("Task List Pinned", function() {
      it("Should have 6 tasks", function() {
        let output = shallow(story);
        expect(output.children().length).toBe(6);
      });

      it("Should have last task pinned", function() {
        let output = shallow(story);
        const lastItem = output
          .find(".list-items")
          .at(0)
          .children()
          .last();
        const pinnedTask = withPinnedTasksData.filter(v => v.id === "6")[0];
        expect(lastItem.prop("task")).toMatchObject(pinnedTask);
      });
    })
  );

  return story;
});
