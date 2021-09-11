import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import { propertyTemplate } from "../constants/propertyTemplate";
import FieldAddress from "../components/FieldAddress";
import FieldDropDown from "../components/FieldDropDown";
import useArrayManager from "../components/useArrayManager";

const Page4 = () => {
  const { properties, setProperties } = useAppContext();
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
      <p>
        This is only applicable for property under single ownership and may not
        apply for other types of property ownership arrangements.
      </p>

      {properties.map((property, index) => (
        <div key={index}>
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
                values={["a", "b"]}
              />
            </section>
          </div>
        </div>
      ))}

      <NavButtons prev="/2_executors" next="4_property" />
    </>
  );
};

export default Page4;
