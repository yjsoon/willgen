import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import PersonAdder from "../components/PersonAdder";
import NavButtons from "../components/NavButtons";

const Page2 = () => {
  const { executors, setExecutors } = useAppContext();
  let executor = executors[0];
  let setExecutor = (executor) => {
    setExecutors([executor]);
  };

  useEffect(() => {
    console.log(executors);
  }, [executors]);

  return (
    <>
      <Head>
        <title>Will Generator - Page 2</title>
      </Head>
      <PersonAdder
        person={executor}
        setPerson={setExecutor}
        description="Full Name of Main Executor"
      />
      <NavButtons prev="/" next="page3" />
    </>
  );
};

export default Page2;
