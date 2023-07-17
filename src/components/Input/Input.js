import * as S from "./Input.style";

const Input = ({ variant, shpae, size, children, ...rest }) => {
  return (
    <S.Input
      variant={variant}
      shpae={shpae}
      size={size}
      placeholder={"test"}
      {...rest}
    />
  );
};

export default Input;
