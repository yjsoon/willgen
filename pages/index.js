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
      <NavButtons next="page2" />
    </>
  );
}
