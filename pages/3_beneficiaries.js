import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import PersonAdder from "../components/PersonAdder";
import NavButtons from "../components/NavButtons";
import { personTemplate } from "../constants/personTemplate";

const Page3 = () => {
  const { beneficiaries, setBeneficiaries } = useAppContext();

  let setBeneficiary = (beneficiary, index) => {
    let newBeneficiaries = [...beneficiaries];
    newBeneficiaries[index] = beneficiary;
    setBeneficiaries(newBeneficiaries);
  };

  let addBeneficiary = (beneficiary) =>
    setBeneficiaries([...beneficiaries, beneficiary]);

  let removeBeneficiary = (index) => {
    let newBeneficiaries = [...beneficiaries]; // thanks copilot
    newBeneficiaries.splice(index, 1);
    setBeneficiaries(newBeneficiaries);
  };

  useEffect(() => {
    console.table(beneficiaries);
  }, [beneficiaries]);

  return (
    <>
      <Head>
        <title>3 — Beneficiaries</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">Beneficiaries</h2>

      {beneficiaries.map((beneficiary, index) => (
        <div key={index}>
          <PersonAdder
            person={beneficiary}
            setPerson={(beneficiary) => setBeneficiary(beneficiary, index)}
            description="Full Name of Beneficiary"
          />
          {
            // don't display remove for the first person
            index != 0 && (
              <button
                className="p-4 rounded bg-red-100 mb-5"
                onClick={() => removeBeneficiary(1)}
              >
                ❌ Remove beneficiary 🔼
              </button>
            )
          }
        </div>
      ))}
      <button
        className="p-4 rounded bg-green-100 block"
        onClick={() => addBeneficiary({ ...personTemplate })}
      >
        ➕ Add beneficiary
      </button>
      <NavButtons prev="/2_executors" next="4_guardian" />
    </>
  );
};

export default Page3;
