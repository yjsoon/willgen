import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import { propertyTemplate } from "../constants/propertyTemplate";
import FieldAddress from "../components/FieldAddress";
import FieldDropDown from "../components/FieldDropDown";
import useArrayManager from "../components/useArrayManager";

const Page4 = () => {
  const { beneficiaries, properties, setProperties } = useAppContext();
  const [setProperty, addProperty, removeProperty] = useArrayManager(
    properties,
    setProperties
  );

  useEffect(() => {
    console.table(properties);
  }, [properties]);

  return (
    <>
      <Head>
        <title>4 — Property</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">Property</h2>
      <p>
        You can choose to allocate your owned properties (if any) to your
        beneficiaries.
      </p>

      {properties.map((property, index) => (
        <div key={index} className="relative">
          <div className="rounded divide-y divide-gray-300 bg-gray-100 px-8 py-8 my-4">
            <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start mb-4">
              <FieldAddress
                object={property}
                setObject={(property) => setProperty(property, index)}
              />
              <FieldDropDown
                object={property}
                setObject={(property) => setProperty(property, index)}
                description="Beneficiary"
                keyName="beneficiary"
                values={["", ...beneficiaries.map((ben) => ben.name)]}
              />
            </section>
          </div>
          {
            // don't display remove for the first person
            properties.length > 1 && (
              <button
                className="absolute w-min bottom-4 right-4"
                onClick={() => removeProperty(index)}
              >
                🗑️
              </button>
            )
          }
        </div>
      ))}
      <button
        className="p-4 rounded bg-green-100 block"
        onClick={() => addProperty({ ...propertyTemplate })}
      >
        ➕ Add property
      </button>
      <NavButtons prev="/3_beneficiaries" next="5_money" />
    </>
  );
};

export default Page4;
