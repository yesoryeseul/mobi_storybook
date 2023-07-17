import * as S from "./Select.style";

const OneSelect = ({ option, ...rest }) => {
  return (
    <>
      <S.Select {...rest}>
        {option.map((item) => (
          <S.Option>{item}</S.Option>
        ))}
      </S.Select>
    </>
  );
};

export default OneSelect;
