import Head from "next/head";
import { useEffect } from "react";
import PersonInputText from "../components/PersonInputText";
import { useAppContext } from "../contexts/AppContext";
import PersonGenderRadio from "../components/PersonGenderRadio";
import PersonDropDown from "../components/PersonDropDown";
import { idTypes } from "../constants/idTypes";
import { citizenshipCountries } from "../constants/citizenshipCountries";

export default function Home() {
  const { author, setAuthor } = useAppContext();

  const nextPage = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log({ author });
  }, [author]);

  return (
    <div className="antialiased text-gray-900 px-6">
      <Head>
        <title>Will Generator - Page 1</title>
      </Head>
      <main className="max-w-xl mx-auto py-12 divide-y md:mx-w-4xl">
        <h1 className="text-6xl font-bold">Will Generator</h1>
        <form onSubmit={nextPage}>
          <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start">
            <PersonInputText
              description="Full Name"
              person={author}
              keyName="name"
              setPerson={setAuthor}
            />
            <PersonGenderRadio person={author} setPerson={setAuthor} />
            <PersonDropDown
              description="ID Type"
              person={author}
              setPerson={setAuthor}
              keyName="idType"
              values={idTypes}
            />
            <PersonInputText
              description="NRIC/Passport/ID No."
              person={author}
              keyName="id"
              setPerson={setAuthor}
              placeholder="e.g. S1122334C"
            />
            <PersonDropDown
              description="Citizenship"
              person={author}
              setPerson={setAuthor}
              keyName="citizenship"
              values={citizenshipCountries}
            />
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start"></section>
          <br />
          <button className="p-4 rounded bg-blue-100 border-red-400 mt-4 w-48">
            Next
          </button>
        </form>
      </main>
    </div>
  );
}
