import * as S from "./Button.style";

const Button = ({
  variant,
  shape,
  size,
  fontsize,
  fontWeight,
  children,
  ...rest
}) => {
  return (
    <S.Button
      variant={variant}
      shape={shape}
      size={size}
      fontsize={fontsize}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button;
