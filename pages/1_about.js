import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import PersonAdder from "../components/PersonAdder";
import NavButtons from "../components/NavButtons";

export default function Home() {
  const { author, setAuthor } = useAppContext();

  const nextPage = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.table(author);
  }, [author]);

  return (
    <>
      <Head>
        <title>1 - About</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">About you</h2>
      <PersonAdder
        person={author}
        setPerson={setAuthor}
        description="Full Name"
      />
      <NavButtons prev="/" next="2_executors" />
    </>
  );
}
