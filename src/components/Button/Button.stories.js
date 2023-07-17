// import GlobalStyles from "../../styles/global";
import Button from "./Button";

export default {
  title: "Button", // 화면상 내비게이션 이름
  component: Button, // 컴포넌트 import
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "borderLine", "disabled", "simple"],
    },
    shape: {
      control: { type: "radio" },
      options: ["primary", "status", "soft", "rounded"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["primary", "small", "medium", "large"],
    },
    fontsize: {
      control: {
        type: "select",
      },
      options: ["primary", "xsmall", "small", "medium", "large"],
    },
    fontWeight: {
      control: "boolean",
    },
    children: {
      control: {
        type: "select",
      },
      options: [
        "판매하기",
        "예약중",
        "판매완료",
        "채팅하기",
        "italic",
        "click me!",
      ],
      mapping: {
        italic: <em>기울기</em>,
      },
    },
  },
  // 전역으로 사용하려면 preview.js 에서 설정!
  // decorators: [
  //   (Story) => (
  //     <>
  //       <GlobalStyles />
  //       <Story />
  //     </>
  //   ),
  // ],
};

/*
2. Template 방식
  - props를 전달하는 것을 좀 더 직관적으로 보여줄 수 있다.
  - args를 재사용할 수 있기 때문에 중복된 코드를 줄일 수 있다.
*/
// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: "primary",
//   children: "Basic",
//   // size: "medium", // 기본값 설정하는 방법, 작성하지 않으면 default로 choose option
// };

export const Primary = {
  args: {
    variant: "primary",
    shape: "primary",
    size: "primary",
    children: "Button",
  },
};
