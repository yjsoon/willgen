import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import useArrayManager from "../components/useArrayManager";
import FieldDropDown from "../components/FieldDropDown";
import { instructions, religions } from "../constants/funeralInstructions";

const Page7 = () => {
  const { author, setAuthor } = useAppContext();

  useEffect(() => {
    console.table(author);
  }, [author]);

  return (
    <>
      <Head>
        <title>7 — Funeral Instructions</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">
        Funeral instructions
      </h2>
      <p>
        You may provide detailed instructions for your preferred funeral
        arrangements. Funeral instructions are not compulsory and may not be
        legally binding, but they will help your executor carry out your wishes.
      </p>

      <div className="rounded divide-y divide-gray-300 bg-gray-100 px-8 py-8 my-4">
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start mb-4">
          <FieldDropDown
            description="Religion"
            object={author}
            setObject={setAuthor}
            keyName="religion"
            values={religions}
          />
          <div></div>
          <FieldDropDown
            description="Instructions"
            object={author}
            setObject={setAuthor}
            keyName="instructions"
            values={instructions}
          />
        </section>
      </div>

      <NavButtons prev="6_distribute" next="8_assets" />
    </>
  );
};

export default Page7;
