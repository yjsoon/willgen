import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import { propertyTemplate } from "../constants/propertyTemplate";
import FieldDropDown from "../components/FieldDropDown";
import useArrayManager from "../components/useArrayManager";
import FieldInputText from "../components/FieldInputText";
import { assetCategories } from "../constants/assetCategories";

const Page10 = () => {
  const { author, setAuthor } = useAppContext();
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

      <div className="rounded bg-gray-100 px-8 py-8 my-4">
        <label className="block mb-4" htmlFor="description">
          <span className="font-bold text-lg text-gray-700">Instructions</span>
          <p>{author.additionalInstructions}</p>
        </label>
      </div>
      <NavButtons prev="8_assets" />
    </>
  );
};

export default Page10;
