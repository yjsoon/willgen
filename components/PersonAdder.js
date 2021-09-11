import FieldInputText from "./FieldInputText";
import FieldRadio from "./FieldRadio";
import FieldDropDown from "./FieldDropDown";
import FieldAddress from "./FieldAddress";

import { idTypes } from "../constants/identityTypes";
import { countries } from "../constants/countries";
import { relationships } from "../constants/relationships";

const PersonAdder = ({
  person,
  setPerson,
  description,
  showGender = true,
  showRelationship = false,
}) => {
  return (
    <div className="rounded divide-y divide-gray-300 bg-gray-100 px-8 py-8 my-4">
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start mb-4">
        <FieldInputText
          description={description}
          object={person}
          keyName="name"
          setObject={setPerson}
        />
        {showGender ? (
          <FieldRadio
            object={person}
            setObject={setPerson}
            option1="Male"
            option2="Female"
          />
        ) : showRelationship ? (
          <FieldDropDown
            description="Relationship"
            object={person}
            setObject={setPerson}
            keyName="relationship"
            values={relationships}
          />
        ) : (
          <div className="block mb-4"></div>
        )}
        <FieldDropDown
          description="ID Type"
          object={person}
          setObject={setPerson}
          keyName="idType"
          values={idTypes}
        />
        <FieldInputText
          description="NRIC/Passport/ID No."
          object={person}
          setObject={setPerson}
          keyName="identification"
          placeholder="e.g. S1122334C"
        />
        <FieldDropDown
          description="Citizenship"
          object={person}
          setObject={setPerson}
          keyName="citizenship"
          values={countries}
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start pt-4">
        <FieldAddress object={person} setObject={setPerson} />
      </section>
    </div>
  );
};

export default PersonAdder;
