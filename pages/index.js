import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import PersonAdder from "../components/PersonAdder";
import PersonAddress from "../components/PersonAddress";
import NavButtons from "../components/NavButtons";

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
      <PersonAdder
        person={author}
        setPerson={setAuthor}
        description="Full Name"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start">
        <PersonAddress person={author} setPerson={setAuthor} />
      </section>
      <NavButtons next="page2" />
    </>
  );
}
