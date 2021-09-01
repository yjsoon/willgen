const PersonDropDown = ({
  description,
  person,
  setPerson,
  keyName,
  values,
}) => {
  return (
    <label className="block  mb-4" htmlFor="idType">
      <span className="text-gray-700">{description}</span>
      <select
        className="form-select block w-full mt-2"
        value={person[keyName]}
        onChange={(e) => setPerson({ ...person, [keyName]: e.target.value })}
      >
        {values.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </label>
  );
};

export default PersonDropDown;
