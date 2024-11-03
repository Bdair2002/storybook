// src/components/Button/Button.stories.js
import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "clicked" },
    label: { control: "text" },
    variant: {
      control: { type: "radio" },
    },
    size: {
      control: { type: "select" },
    },
    color: {
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "primary",
  size: "medium",
  color: "blue",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  variant: "secondary",
  size: "medium",
  color: "blue",
};

export const Text = Template.bind({});
Text.args = {
  label: "Button",
  variant: "text",
  size: "medium",
  color: "blue",
};
