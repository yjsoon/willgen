import Head from "next/head";
import { useEffect } from "react";
import PersonInputText from "../components/PersonInputText";
import { useAppContext } from "../contexts/AppContext";
import PersonGenderRadio from "../components/PersonGenderRadio";
import PersonDropDown from "../components/PersonDropDown";
import { idTypes } from "../constants/idTypes";
import { countries } from "../constants/countries";
import PersonAddress from "../components/PersonAddress";
import Link from "next/link";

export default function Home() {
  const { author, setAuthor } = useAppContext();

  const nextPage = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(author);
  }, [author]);

  return (
    <>
      <Head>
        <title>Will Generator - Page 1</title>
      </Head>
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
      <Link href="/page2">
        <button className="p-4 rounded bg-blue-100 border-red-400 mt-4 w-48">
          Next
        </button>
      </Link>
    </>
  );
}
