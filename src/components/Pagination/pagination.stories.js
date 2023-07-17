import Paginations from "./pagination";

export default {
  title: "Components/Pagination",
  component: Paginations,
  argTypes: {
    total: {
      control: { type: "text" },
    },
    limit: {
      control: { type: "text" },
    },
    page: {
      control: { type: "text" },
    },
  },
};

export const Primary = {
  args: {
    children: "test",
  },
};
