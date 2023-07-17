import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["primary"],
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "borderNone"],
    },
    shape: {
      control: {
        type: "select",
      },
      options: ["primary", "soft"],
    },
  },
};

export const BasicInput = {
  arge: {
    variant: "primary",
    size: "primary",
    shape: "primary",
    children: "input...",
  },
};
