const PersonBlock = ({ description, keyName, person, setPerson }) => {
  return (
    <label className="block">
      <span className="text-gray-700">{description}</span>
      <input
        type="text"
        id={keyName}
        className="mt-1 block w-full"
        value={person.name}
        onChange={(e) => setPerson({ ...person, [keyName]: e.target.value })}
      />
    </label>
  );
};

export default PersonBlock;
