const FieldInputText = ({
  description,
  keyName,
  object,
  setObject,
  placeholder,
  className,
}) => {
  return (
    <label className={`block mb-4 ${className}`} htmlFor={keyName}>
      <span className="text-gray-700">{description}</span>
      <input
        type="text"
        name={keyName}
        className="mt-2 block w-full"
        value={object[keyName]}
        onChange={(e) => setObject({ ...object, [keyName]: e.target.value })}
        placeholder={placeholder}
      />
    </label>
  );
};

export default FieldInputText;
