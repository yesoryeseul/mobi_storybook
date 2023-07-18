import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    border-bottom: 1px solid #ddd;
  `,
  bgfull: css`
    border-bottom: 1px solid #ddd;
    background-color: ${({ theme }) => theme.color.mainColor};
    color: white;
    border-radius: 4px;
  `,
};

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 40px;
  padding: 1rem;
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 4px;
  ${({ variant }) => variantCSS[variant]}
`;

export const Select = styled.ul`
  position: absolute;
  z-index: 1;
  width: 120px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  ${({ variant }) => variantCSS[variant]}
`;

export const OneSelect = styled.li`
  color: #222;
  cursor: pointer;
  text-align: center;
  padding: 0.5rem 0;

  :last-of-type {
    border: none;
  }
  :hover {
    font-weight: bold;
    color: #222;
  }
  ${({ variant }) => variantCSS[variant]}
`;
