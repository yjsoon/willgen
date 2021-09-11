import PersonInputText from "../components/PersonInputText";
import PersonGenderRadio from "../components/PersonGenderRadio";
import PersonDropDown from "../components/PersonDropDown";
import PersonAddress from "../components/PersonAddress";

import { idTypes } from "../constants/idTypes";
import { countries } from "../constants/countries";

const PersonAdder = ({ person, setPerson, description }) => {
  return (
    <div className="rounded divide-y divide-gray-300 bg-gray-100 px-8 py-8 my-4">
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start mb-4">
        <PersonInputText
          description={description}
          person={person}
          keyName="name"
          setPerson={setPerson}
        />
        <PersonGenderRadio person={person} setPerson={setPerson} />
        <PersonDropDown
          description="ID Type"
          person={person}
          setPerson={setPerson}
          keyName="idType"
          values={idTypes}
        />
        <PersonInputText
          description="NRIC/Passport/ID No."
          person={person}
          keyName="identification"
          setPerson={setPerson}
          placeholder="e.g. S1122334C"
        />
        <PersonDropDown
          description="Citizenship"
          person={person}
          setPerson={setPerson}
          keyName="citizenship"
          values={countries}
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start">
        <PersonAddress person={person} setPerson={setPerson} />
      </section>
    </div>
  );
};

export default PersonAdder;
