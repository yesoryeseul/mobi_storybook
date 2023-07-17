const Input = (props) => {
  const { size, borders, children, ...rest } = props;

  const inputClass = `${size} ${borders}`;

  const padding = {
    small: "10px",
    medium: "16px",
    large: "20px",
  }[size];

  const border = {
    none: "none",
  }[borders];

  const borderBottom = {
    bottom: "1px solid",
  }[borders];

  const style = {
    padding,
    border,
    borderBottom,
  };

  return (
    <input
      className={inputClass}
      placeholder={children}
      style={style}
      {...rest}
    />
  );
};

export default Input;
