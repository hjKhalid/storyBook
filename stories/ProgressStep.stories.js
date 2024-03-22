import React from "react";
// import { fn } from '@storybook/addon-actions';
import { fn } from "@storybook/test";

import ProgressStep from "./ProgressStep";

export default {
  title: "ProgressStep",
  component: ProgressStep,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Optional parameter to center the component in the Canvas.
  },
  argTypes: {
    backgroundColor: { control: "color" }, // Example of controlling background color
  },
  args: { onClick: fn() }, // Example of using the action addon to spy on onClick event
};

// Story for vertical progress steps
export const Vertical = (args) => (
  <ProgressStep {...args} direction="vertical" steps={[{step:'1',description:"hi"}, {step:'2',description:"hi"}, {step:'3',description:"hi"}]} currentStep={1} />
);
Vertical.args = {
  label: "ProgressStep",
};

// Story for horizontal progress steps
export const Horizontal = (args) => (
  <ProgressStep
    {...args}
    direction="horizontal"
    steps={[
      { step: "1", description: "hi" },
      { step: "2", description: "hi" },
      { step: "3", description: "hi" },
    ]}
    currentStep={1}
  />
);
Horizontal.args = {
  label: "ProgressStep",
};
