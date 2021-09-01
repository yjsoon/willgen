import { countries } from "../constants/countries";
import PersonDropDown from "./PersonDropDown";

const PersonAddress = ({ person, setPerson }) => {
  return (
    <label className="block my-4" htmlFor="Address">
      <span className="text-gray-700">Address</span>
      <input
        type="text"
        name="address1"
        className="mt-2 block w-full"
        value={person.address1}
        onChange={(e) => setPerson({ ...person, address1: e.target.value })}
        placeholder="Address Line 1"
      />
      <input
        type="text"
        name="address2"
        className="mt-2 block w-full"
        value={person.address2}
        onChange={(e) => setPerson({ ...person, address2: e.target.value })}
        placeholder="Address Line 2 (optional)"
      />
      <div className="grid grid-cols-3 gap-2">
        <select
          className="mt-2 w-full col-span-2"
          value={person.country}
          onChange={(e) => setPerson({ ...person, country: e.target.value })}
        >
          {countries.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="postal"
          className="mt-2 w-full"
          value={person.postal}
          onChange={(e) => setPerson({ ...person, postal: e.target.value })}
          placeholder="Postal code"
        />
      </div>
    </label>
  );
};

export default PersonAddress;
