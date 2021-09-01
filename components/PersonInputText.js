const PersonInputText = ({
  description,
  keyName,
  person,
  setPerson,
  placeholder,
}) => {
  return (
    <label className="block mt-8" htmlFor={keyName}>
      <span className="text-gray-700">{description}</span>
      <input
        type="text"
        name={keyName}
        className="mt-2 block w-full"
        value={person[keyName]}
        onChange={(e) => setPerson({ ...person, [keyName]: e.target.value })}
        placeholder={placeholder}
      />
    </label>
  );
};

export default PersonInputText;
