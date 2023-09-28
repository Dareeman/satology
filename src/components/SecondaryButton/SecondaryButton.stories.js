import { SecondaryButton } from ".";

export default {
  title: "Components/SecondaryButton",
  component: SecondaryButton,
  argTypes: {
    size: {
      options: ["l", "m", "s"],
      control: { type: "select" },
    },
    state: {
      options: ["default", "hover", "active", "normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "l",
    state: "default",
    className: {},
    text: "Swap",
  },
};
