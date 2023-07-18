import { action } from "@storybook/addon-actions";
import Select2 from "./Select2";
import { useState } from "react";

const select2 = {
  title: "Components/Select2",
  component: Select2,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "bgfull"],
      control: { type: "select" },
    },
  },
};

export default select2;

export const Primary = ({ variant, ...args }) => {
  const [selectedValue, setSelectedValue] = useState("판매중");

  const onSelectedValue = (value) => {
    setSelectedValue(value);
    action("clicked")(value); // options의 selectedValue클릭시 action창에 찍힘 ex) clicked: "판매중", clicked: "거랴중", clicked: "판매완료"
  };

  return (
    <Select2
      variant={variant}
      selectedValue={selectedValue}
      onClick={onSelectedValue}
      options={[
        { value: "판매중", label: "판매중" },
        { value: "거래중", label: "거래중" },
        { value: "판매완료", label: "판매완료" },
      ]}
      {...args}
    />
  );
};
