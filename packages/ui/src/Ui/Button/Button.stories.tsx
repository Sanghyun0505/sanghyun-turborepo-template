import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const StyledButton: Story = {
  args: {
    children: "누르시면 alert가 발생!",
    customStyle: {
      width: "200px",
      padding: "20px 0",
      cursor: "pointer",
    },
    onClick: () => {
      window.alert("hi");
    },
  },
};
