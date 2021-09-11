import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import { propertyTemplate } from "../constants/propertyTemplate";
import FieldDropDown from "../components/FieldDropDown";
import useArrayManager from "../components/useArrayManager";
import FieldInputText from "../components/FieldInputText";
import { assetCategories } from "../constants/assetCategories";

const Page9 = () => {
  const { author, setAuthor } = useAppContext();
  useEffect(() => {
    console.table(author);
  }, [author]);

  return (
    <>
      <Head>
        <title>9 - Additional instructions</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">
        Additional instructions
      </h2>
      <p>
        The information collected on this screen will be attached as an appendix
        to the Will. In this section, you can include detailed instructions
        regarding guardians of your children, funeral arrangements, last
        messages to loved ones, etc.
      </p>
      <p>
        These instructions are not compulsory and may not be legally binding,
        but they will help the executor carry out your wishes.
      </p>

      <div className="rounded bg-gray-100 px-8 py-8 my-4">
        <label className="block mb-4" htmlFor="description">
          <span className="text-gray-700">Instructions</span>
          <textarea
            type="text"
            name="description"
            className="mt-2 block w-full"
            value={author.additionalInstructions}
            onChange={(e) =>
              setAuthor({ ...author, additionalInstructions: e.target.value })
            }
            placeholder="Where to find?"
            rows={5}
          />
        </label>
      </div>
      <NavButtons prev="8_assets" next="10_review" />
    </>
  );
};

export default Page9;
