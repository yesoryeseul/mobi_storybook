import { useState } from "react";
import * as S from "./Selet2.style";
import { IoIosArrowDown } from "react-icons/io";

const Select2 = ({
  options,
  selectedValue = "",
  onClick,
  variant,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <S.Wrapper onClick={onOpen}>
      <S.Container variant={variant}>
        <span>{selectedValue}</span>
        <IoIosArrowDown size={16} />
      </S.Container>
      {isOpen && (
        <S.Select variant={variant}>
          {options.map((option, idx) => (
            <S.OneSelect
              variant={variant}
              key={idx}
              onClick={() => onClick(option.value)}
              state={selectedValue === option.value}
            >
              {option.label}
            </S.OneSelect>
          ))}
        </S.Select>
      )}
    </S.Wrapper>
  );
};
export default Select2;
