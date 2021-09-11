const FieldDropDown = ({ description, object, setObject, keyName, values }) => {
  return (
    <label className="block  mb-4" htmlFor="idType">
      <span className="text-gray-700">{description}</span>
      <select
        className="form-select block w-full mt-2"
        value={object[keyName]}
        onChange={(e) => setObject({ ...object, [keyName]: e.target.value })}
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

export default FieldDropDown;
