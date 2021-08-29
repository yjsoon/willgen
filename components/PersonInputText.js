const PersonInputText = ({
  description,
  keyName,
  person,
  setPerson,
  placeholder,
}) => {
  return (
    <label className="block mt-8">
      <span className="text-gray-700">{description}</span>
      <input
        type="text"
        id={keyName}
        className="mt-1 block w-full"
        value={person.name}
        onChange={(e) => setPerson({ ...person, [keyName]: e.target.value })}
        placeholder={placeholder}
      />
    </label>
  );
};

export default PersonInputText;
