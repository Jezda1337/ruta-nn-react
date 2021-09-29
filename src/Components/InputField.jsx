// import "../Scss/Components/InputField.scss";

const InputField = (props) => {
  return (
    <>
      <label className="input-wrapper" htmlFor="prop.name">
        <input
          className="input-wrapper__input"
          type={props.type}
          placeholder={props.placeholder}
          required
          list={props.list}
          pattern={props.pattern}
          name={props.name}
          onChange={props.change}
        />
      </label>
    </>
  );
};

export default InputField;
