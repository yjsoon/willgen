import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import PersonAdder from "../components/PersonAdder";
import NavButtons from "../components/NavButtons";

export default function Home() {
  const { author, setAuthor } = useAppContext();

  return (
    <>
      <Head>
        <title>Will Generator</title>
      </Head>
      <p>
        Take care of your loved ones by planning your legacy today. After you
        have decided on your executor(s) and beneficiaries, as well as how much
        each should receive, use our Online Will Generator to set a plan in
        place.
      </p>
      <h2>Things to note before you begin.</h2>
      <div className="info grid-cols-3 grid gap-4">
        <section>
          <h3>1. You will need the following information</h3>
          <h4>Mandatory</h4>
          <ul>
            <li>Your personal details</li>
            <li>Name and NRIC/Passport no. of Executors</li>
            <li>Name and NRIC/Passport no. of Beneficiaries</li>
          </ul>
          <h4>Recommended</h4>
          <ul>
            <li>
              Asset details (e.g. list of bank accounts or insurance policies)
            </li>
          </ul>
        </section>
        <section>
          <h3>2. Start only when you can finish</h3>
          <p>
            This session should take less than 10 minutes to complete if all the
            information is available.
          </p>
          <p>
            Your response will be saved in this browser, but can be lost if you
            close the window, or if you clear your cache. Please make sure you
            have everything you need to complete the process.
          </p>
        </section>
        <section>
          <h3>The Will is only valid once it has been endorsed</h3>
          <p>
            This online template produces a pdf that you need to print and sign.
            It will only be valid once it has been signed by you and two
            witnesses.
          </p>
          <p>
            The printed and signed Will should be stored in a safe place (Such
            as a safe deposit box), with its location added to the{" "}
            <a href="https://wills.sal.sg/">Wills Registry</a>, and made known
            to the executor(s).
          </p>
        </section>
      </div>
      <NavButtons next="1_about" nextLabel="Get started" />
    </>
  );
}
