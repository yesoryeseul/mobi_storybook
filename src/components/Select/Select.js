import OneSelect from "./one-select";

function Select(props) {
  const { option, variant, shape, size, children, status, ...rest } = props;
  return (
    <OneSelect
      variant={variant}
      shape={shape}
      status="default"
      size={size}
      option={children}
    />
  );
}

export default Select;
