import Head from "next/head";
import { useEffect } from "react";
import PersonInputText from "../components/PersonInputText";
import { useAppContext } from "../contexts/AppContext";
import PersonGenderRadio from "../components/PersonGenderRadio";
import PersonDropDown from "../components/PersonDropDown";
import { idTypes } from "../constants/idTypes";
import { countries } from "../constants/countries";
import PersonAddress from "../components/PersonAddress";

export default function Home() {
  const { author, setAuthor } = useAppContext();

  const nextPage = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(author);
  }, [author]);

  return (
    <div className="antialiased text-gray-900 bg-gray-400 py-10 h-full">
      <Head>
        <title>Will Generator - Page 1</title>
      </Head>
      <main className="max-w-4xl mx-auto py-12 md:mx-w-4xl bg-white px-10">
        <h1 className="text-6xl font-bold">Will Generator</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start mb-4">
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
            values={countries}
          />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start">
          <PersonAddress person={author} setPerson={setAuthor} />
        </section>
        <br />
        <button className="p-4 rounded bg-blue-100 border-red-400 mt-4 w-48">
          Next
        </button>
      </main>
    </div>
  );
}
