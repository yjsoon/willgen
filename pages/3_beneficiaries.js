import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import PersonAdder from "../components/PersonAdder";
import NavButtons from "../components/NavButtons";
import { personTemplate } from "../constants/personTemplate";

const Page3 = () => {
  const { beneficiaries, setBeneficiaries } = useAppContext();
  let addBeneficiary = (beneficiary) =>
    setBeneficiaries([...beneficiaries, beneficiary]);
  let removeBeneficiary = (index) => {
    let newBeneficiaries = [...beneficiaries]; // thanks copilot
    newBeneficiaries.splice(index, 1);
    setBeneficiaries(newBeneficiaries);
  };

  useEffect(() => {
    console.log(`There are ${beneficiaries.length} beneficiaries.`);
    console.log(beneficiaries);
  }, [beneficiaries]);

  return (
    <>
      <Head>
        <title>3 — Beneficiaries</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">Beneficiaries</h2>
      <PersonAdder
        person={beneficiaries[0]}
        setPerson={() => {}}
        description="Full Name of Beneficiary"
      />
      {beneficiaries[1] == null && (
        <button
          className="p-4 rounded bg-green-100"
          onClick={() => addBeneficiary({ ...personTemplate })}
        >
          ➕ Add beneficiary
        </button>
      )}
      {beneficiaries[1] && (
        <>
          <PersonAdder
            person={beneficiaries[1]}
            setPerson={() => {}}
            description="Full Name of Beneficiary"
          />
          <button className="p-4 rounded bg-red-100" onClick={() => {}}>
            ❌ Remove beneficiary 🔼
          </button>
        </>
      )}
      <NavButtons prev="/" next="page3" />
    </>
  );
};

export default Page3;
