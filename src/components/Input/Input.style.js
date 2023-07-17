import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #d9d9d9;
  `,
  borderNone: css`
    border: none;
    background-color: #e6e6e6;
  `,
};

const sizeCSS = {
  primary: css`
    width: 400px;
  `,
};

const shapeCSS = {
  primary: css`
    border-radius: 0;
  `,
  soft: css`
    border-radius: 8px;
  `,
};

export const Input = styled.input`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  outline: none;
  padding: 12px;
`;
