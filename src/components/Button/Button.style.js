import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.color.mainColor};
  `,
  borderLine: css`
    color: #3cb371;
    border: 1px solid ${({ theme }) => theme.color.mainColor};
    background-color: transparent;
  `,
  disabled: css`
    background-color: #e6e6e6;
  `,
  simple: css`
    background-color: #222;
  `,
};

const shapeCSS = {
  primary: css`
    border-radius: 0;
  `,
  status: css`
    border-radius: 2px;
  `,
  soft: css`
    border-radius: 8px;
  `,
  rounded: css`
    border-radius: 20px;
  `,
};

const sizeCSS = {
  primary: css`
    padding: 8px 12px;
  `,
  small: css`
    padding: 4px 6px;
  `,
};

const fontSizeCSS = {
  primary: css`
    font-size: 16px;
  `,
  xsmall: css`
    font-size: 12px;
  `,
  small: css`
    font-size: 14px;
  `,
  medium: css`
    font-size: 18px;
  `,
  large: css`
    font-size: 20px;
  `,
};

export const Button = styled.button`
  /* font-weight: bold; */
  color: white;
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  ${({ fontsize }) => fontSizeCSS[fontsize]}
  ${({ fontWeight }) =>
    fontWeight
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `}
`;
