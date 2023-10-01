import "./form-input.styles.scss";

export const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="form-input-group">
      <input {...inputOptions} />
      {label && (
        <label className={inputOptions.value.length ? "shrink" : ""}>
          {label}
        </label>
      )}
    </div>
  );
};
