import { ComponentMeta, ComponentStoryObj, StoryObj } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Hello World",
  },
} as ComponentMeta<typeof Text>;

export const Default: ComponentStoryObj<typeof Text> = {};

export const Small: ComponentStoryObj<typeof Text> = {
  args: {
    size: "sm",
  },
};

export const Large: ComponentStoryObj<typeof Text> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: ComponentStoryObj<typeof Text> = {
  args: {
    asChild: true,
    children: <p>Test</p>,
  },
};
