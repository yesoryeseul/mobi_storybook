import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    variant: {
      options: ["default", "secondary"],
      control: { type: "radio" },
    },
    shape: {
      options: ["default", "littleShape", "shape"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "small", "large"],
      control: { type: "select" },
    },
  },
};

export const Primary = {
  args: {
    children: ["사과", "딸기", "바나나"],
  },
};

export const Secondary = {
  args: {
    children: ["option1", "option2", "option3"],
  },
};
