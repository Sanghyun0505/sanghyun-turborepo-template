import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Ui/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const StyledProgressBar: Story = {
  args: {
    gauge: 50,
    customStyle: {
      containerStyle: {
        width: "500px",
      },
    },
  },
};
