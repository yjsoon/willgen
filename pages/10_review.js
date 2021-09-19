import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import Link from "next/link";
import TitleWithEdit from "../components/TitleWithEdit";
import PersonDisplay from "../components/PersonDisplay";

const Page10 = () => {
  const { author, executors } = useAppContext();
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

      <TitleWithEdit title="Legal Guardians" link="/3_beneficiaries" />

      <TitleWithEdit title="Funeral Instructions" link="/7_funeral" />

      <TitleWithEdit title="Special Assets" link="/8_assets" />

      <TitleWithEdit title="Special Instructions" link="/9_instructions" />

      <section className="rounded bg-gray-100 px-8 py-8 my-4">
        <div className="block mb-4">
          <span className="font-bold text-lg text-gray-700">Instructions</span>
          <p>{author.additionalInstructions}</p>
        </div>
      </section>
      <NavButtons prev="8_assets" />
    </>
  );
};

export default Page10;
