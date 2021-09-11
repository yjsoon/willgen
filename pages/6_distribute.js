import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import useArrayManager from "../components/useArrayManager";

const Page6 = () => {
  const { beneficiaries, setBeneficiaries } = useAppContext();
  const [setBeneficiary] = useArrayManager(beneficiaries, setBeneficiaries);

  useEffect(() => {
    console.table(beneficiaries);
  }, [beneficiaries]);

  return (
    <>
      <Head>
        <title>6 — Distribute Assets</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">
        Distribution of assets
      </h2>
      <p>
        Your remaining assets consist of everything other than the property and
        fixed sum you have already allocated in the previous steps. These may
        include moneys, bank and insurance policies, investments, cars, and so
        on. The percentage split across all beneficiaries must add up to 100%.
      </p>
      <p>
        In the event any of the beneficiaries referred to here predecease you,
        their share shall be given to the surviving beneficiary, and if more
        than one, in equal shares.
      </p>

      <table className="table-auto w-full my-8">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4 text-left">Beneficiary Name</th>
            <th className="p-4 text-left">ID/Passport No.</th>
            <th className="p-4 text-left">Relationship</th>
            <th className="p-4 text-left">Share</th>
          </tr>
        </thead>
        {beneficiaries.map((beneficiary, index) => (
          <tr className="bg-gray-100">
            <td className="p-4">{beneficiary.name}</td>
            <td className="p-4">{beneficiary.identification}</td>
            <td className="p-4">{beneficiary.relationship}</td>
            <td className="p-4 w-1/5">
              <input
                className="w-2/3 mr-4 p-1 pr-2 text-right"
                value={beneficiary.share}
                onChange={(e) => {
                  setBeneficiary(
                    { ...beneficiary, share: e.target.value },
                    index
                  );
                }}
              ></input>
              %
            </td>
          </tr>
        ))}
        <tfoot className="bg-gray-200">
          <tr>
            <th className="p-4 text-left"></th>
            <th className="p-4 text-left"></th>
            <th className="p-4 text-left"></th>
            <th className="p-4 text-left">
              Total:{" "}
              {beneficiaries.reduce(
                (total, ben) =>
                  total + (ben.share === "" ? 0 : parseInt(ben.share)),
                0
              )}
              %
            </th>
          </tr>
        </tfoot>
      </table>
      <NavButtons prev="5_money" next="7_funeral" />
    </>
  );
};

export default Page6;
