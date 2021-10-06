import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import Link from "next/link";
import TitleWithEdit from "../components/TitleWithEdit";
import PersonDisplay from "../components/PersonDisplay";
import { propertyTemplate } from "../constants/propertyTemplate";

const Page10 = () => {
  const { author, executors, beneficiaries, properties, moneys, assets } =
    useAppContext();
  useEffect(() => {
    console.table(author);
  }, [author]);

  return (
    <>
      <Head>
        <title>10 - Review</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">
        Review your will
      </h2>
      <p>
        You are almost done! After you save the Will and close this session, you
        can no longer retrieve or edit the document. Do make sure that all the
        information is correct, as you will need to start over again if you need
        to make changes to your Will.
      </p>

      <TitleWithEdit title="Personal Details" link="/1_about" />
      <PersonDisplay person={author} />

      <TitleWithEdit title="Executors" link="/2_executors" />
      {executors.map((executor) => (
        <PersonDisplay person={executor} key={executor.id} showGender={false} />
      ))}

      <TitleWithEdit
        title="Beneficiaries and asset allocation"
        link="/3_beneficiaries"
      />

      <table className="table-auto w-full my-8">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4 text-left">Beneficiary</th>
            <th className="p-4 text-left">Property allocation</th>
            <th className="p-4 text-left">Sum of money allocation</th>
            <th className="p-4 text-left">Remaining asssets allocation</th>
          </tr>
        </thead>
        {beneficiaries.map((beneficiary, index) => (
          <tr className="bg-gray-100">
            <td className="p-4 align-text-top">
              <strong>{beneficiary.name}</strong>
              <br />
              {beneficiary.identification}
              <br />
              {beneficiary.relationship}
              <br />
              {beneficiary.address1}
              <br />
              {beneficiary.address2}
              <br />
              {beneficiary.country} {beneficiary.postal}
            </td>
            <td className="p-4 align-text-top">
              {properties
                .filter((prop) => prop.beneficiary === beneficiary.name)
                .map((prop) => (
                  <div key={prop.name}>
                    {prop.address1}
                    <br />
                    {prop.address2}
                    <br />
                    {prop.country} {prop.postal}
                  </div>
                ))}
            </td>
            <td className="p-4 align-text-top">
              {moneys
                .filter((mon) => mon.beneficiary === beneficiary.name)
                .map((mon) => (
                  <div key={mon.name}>${mon.money}</div>
                ))}
            </td>
            <td className="p-4 w-1/5 align-text-top">{beneficiary.share}%</td>
          </tr>
        ))}
      </table>

      <TitleWithEdit title="Legal Guardians" link="/3_beneficiaries" />

      <TitleWithEdit title="Funeral Instructions" link="/7_funeral" />
      <div className="rounded divide-y divide-gray-300 bg-gray-100 px-8 py-8 my-4">
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start mb-4">
          <label className="block  mb-4">
            <span className="font-bold text-lg text-gray-700">Religion</span>
            <p>{author.religion}</p>
          </label>
          <div></div>
          <label className="block  mb-4">
            <span className="font-bold text-lg text-gray-700">
              Instructions
            </span>
            <p>{author.instructions}</p>
          </label>
        </section>
      </div>

      <TitleWithEdit title="Special Assets" link="/8_assets" />
      {assets.map((asset) => (
        <section className="rounded bg-gray-100 px-8 py-8 my-4 grid grid-cols-2">
          <div className="block mb-4">
            <span className="font-bold text-lg text-gray-700">Asset Name</span>
            <p>{asset.name}</p>
          </div>
          <div className="block mb-4">
            <span className="font-bold text-lg text-gray-700">Category</span>
            <p>{asset.category}</p>
          </div>
          <div className="block mb-4">
            <span className="font-bold text-lg text-gray-700">Value</span>
            <p>{asset.value}</p>
          </div>
          <div className="block mb-4">
            <span className="font-bold text-lg text-gray-700">Description</span>
            <p>{asset.description}</p>
          </div>
        </section>
      ))}

      <TitleWithEdit title="Special Instructions" link="/9_instructions" />

      <section className="rounded bg-gray-100 px-8 py-8 my-4">
        <div className="block mb-4">
          <span className="font-bold text-lg text-gray-700">Instructions</span>
          <p>{author.additionalInstructions}</p>
        </div>
      </section>
      <NavButtons
        prev="8_assets"
        next="generate-pdf"
        nextLabel="Generate PDF"
      />
    </>
  );
};

export default Page10;
