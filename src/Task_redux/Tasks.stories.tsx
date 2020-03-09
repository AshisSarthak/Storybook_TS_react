import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { specs, describe, it } from "storybook-addon-specifications";
import { shallow } from "enzyme";
import expect from "expect";

import Task from "./Task";

export default {
  component: Task,
  title: "Redux/Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

export const Default = () => {
  return <Task task={{ ...taskData }} {...actionsData} />;
};

export const Pinned = () => (
  <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
);

// Custom stories using Enzyme

const stories = storiesOf("redux/Task", module);

stories.add("Task Custom", function() {
  const story = (
    <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
  );

  specs(() =>
    describe("Task Custom", function() {
      it("Should not contain star icon for archived task", function() {
        let output = shallow(story);
        expect(output.find(".icon-star")).toHaveLength(0);
      });

      it("Should contain star icon for non-archived task", function() {
        const story = (
          <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
        );
        let output = shallow(story);
        expect(output.find(".icon-star")).toHaveLength(1);
      });
    })
  );

  return story;
});
