const Input = ({ type = "text", value, onChange, onBlur, className }) => {
  const handleChange = (e) => {
    let newValue = e.target.value;

    if (type === "number") {
      newValue = newValue === "" ? "" : Number(newValue);
    }

    onChange(newValue);
  };

  return (
    <input
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={handleChange}
      className={className}
    />
  );
};

export default Input;
