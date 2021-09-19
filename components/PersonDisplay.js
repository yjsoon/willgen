const PersonDisplay = ({ person, showGender = true }) => {
  return (
    <section className="rounded bg-gray-100 px-8 py-8 my-4 grid grid-cols-2">
      <div className="block mb-4">
        <span className="font-bold text-lg text-gray-700">Name</span>
        <p>{person.name}</p>
      </div>
      {showGender ? (
        <div className="block mb-4">
          <span className="font-bold text-lg text-gray-700">Gender</span>
          <p>{person.gender}</p>
        </div>
      ) : (
        <div />
      )}
      <div className="block mb-4">
        <span className="font-bold text-lg text-gray-700">Type of ID</span>
        <p>{person.idType}</p>
      </div>
      <div className="block mb-4">
        <span className="font-bold text-lg text-gray-700">
          NRIC/Passport/ID No.
        </span>
        <p>{person.identification}</p>
      </div>
      <div className="block mb-4">
        <span className="font-bold text-lg text-gray-700">Citizenship</span>
        <p>{person.citizenship}</p>
      </div>
      <div />
      <div className="block mb-4">
        <span className="font-bold text-lg text-gray-700">Address</span>
        <p>{person.address1}</p>
        <p>{person.address2}</p>
        <p>
          {person.country} {person.postal}
        </p>
      </div>{" "}
    </section>
  );
};

export default PersonDisplay;
