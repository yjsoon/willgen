const PersonAddress = ({ person, setPerson }) => {
  return (
    <label className="block mt-8" htmlFor="Address">
      <span className="text-gray-700">Address</span>
      <input
        type="text"
        name="address"
        className="mt-1 block w-full"
        value={person.address}
        onChange={(e) => setPerson({ ...person, [keyName]: e.target.value })}
        placeholder={placeholder}
      />
    </label>
  );
};

export default PersonAddress;
