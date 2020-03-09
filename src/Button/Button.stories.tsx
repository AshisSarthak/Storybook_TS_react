import React from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const actionData = {
  handleClick: action("handleClick")
};

export const TextButton1 = () => <Button text="Hello Button" {...actionData} />;

export const TextButtonWithKnob = () => (
  <Button text={text("Label", "Hello Storybook")} {...actionData} />
);

export const NumberButton = () => <Button text="12334" {...actionData} />;

export const NumberButtonWithKnob = () => (
  <Button text={number("Label", 123)} {...actionData} />
);

export const TextButtonWithAction = () => (
  <Button text="I am Button" {...actionData} />
);
