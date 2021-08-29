import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [page, setPage] = useState(1);

  const nextPage = async (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Will Generator</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Will Generator</h1>
        <section className="p-10 bg-gray-100 m-4">
          <form onSubmit={nextPage}>
            {page == 1 && (
              <>
                <label htmlFor={"name"}>Name</label>
                <input type="text" id={"name"} />
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
