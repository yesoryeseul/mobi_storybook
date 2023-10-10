import Paginations from "./pagination";

export default {
  title: "Components/Pagination",
  component: Paginations,
  argTypes: {
    count: {
      control: { type: "number" },
      defaultValue: 10,
    },
    page: {
      control: { type: "number" },
      defaultValue: 1,
    },
  },
};

export const Primary = {
  args: {
    children: "test",
  },
};
