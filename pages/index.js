import Head from "next/head";
import { useState, useEffect } from "react";
import PersonBlock from "../components/PersonBlock";

export default function Home() {
  const [page, setPage] = useState(1);
  const [author, setAuthor] = useState({});

  const nextPage = async (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div className="antialiased text-gray-900 px-6">
      <Head>
        <title>Will Generator</title>
      </Head>
      <main className="max-w-xl mx-auto py-12 divide-y md:mx-w-4xl">
        <h1 className="text-6xl font-bold">Will Generator</h1>
        <section className="py-8">
          <form onSubmit={nextPage}>
            {page == 1 && (
              <>
                <PersonBlock
                  description="Full Name"
                  person={author}
                  keyName="name"
                  setPerson={setAuthor}
                />
              </>
            )}

            {page == 2 && (
              <>
                <label htmlFor={"name"}>Page 2 form</label>
                <input type="text" id={"name"} />
              </>
            )}
            <br />
            <button className="p-4 rounded bg-blue-100 border-red-400 mt-4">
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
