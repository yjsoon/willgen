const PersonGenderRadio = ({ person, setPerson }) => {
  return (
    <label
      className="block mt-8"
      htmlFor="gender"
      onChange={(e) => ({ ...person, gender: e.target.value })}
    >
      <span className="text-gray-700 block mb-2">Gender</span>
      <span className="inline-flex items-center">
        <input type="radio" name="gender" value="Male" />
        <span className="ml-2">Male</span>
      </span>
      <span className="inline-flex items-center ml-6">
        <input type="radio" name="gender" value="Female" />
        <span className="ml-2">Female</span>
      </span>
    </label>
  );
};

export default PersonGenderRadio;
