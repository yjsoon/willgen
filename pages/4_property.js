import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import PersonAdder from "../components/PersonAdder";
import NavButtons from "../components/NavButtons";
import { personTemplate } from "../constants/personTemplate";

const Page3 = () => {
  const { beneficiaries, setBeneficiaries } = useAppContext();

  useEffect(() => {
    console.table(beneficiaries);
  }, [beneficiaries]);

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

      <NavButtons prev="/2_executors" next="4_property" />
    </>
  );
};

export default Page3;
