import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    borders: {
      control: {
        type: "radio",
      },
      options: ["all", "bottom", "none"],
    },
  },
};

const Template = (args) => <Input {...args} />;
export const BasicInput = Template.bind({});

BasicInput.args = {
  children: "BasicInput",
  size: "level1",
};
