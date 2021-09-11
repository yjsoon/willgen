const FieldRadio = ({ object, setObject, option1, option2 }) => {
  return (
    <label
      className="block mb-4"
      htmlFor="gender"
      onChange={(e) => setObject({ ...object, gender: e.target.value })}
    >
      <span className="text-gray-700 block mb-2">Gender</span>
      <span className="inline-flex items-center">
        <input type="radio" name="gender" value="Male" />
        <span className="ml-2">{option1}</span>
      </span>
      <span className="inline-flex items-center ml-6">
        <input type="radio" name="gender" value="Female" />
        <span className="ml-2">{option2}</span>
      </span>
    </label>
  );
};

export default FieldRadio;
