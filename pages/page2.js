import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import PersonAdder from "../components/PersonAdder";
import NavButtons from "../components/NavButtons";
import { personTemplate } from "../constants/personTemplate";

const Page2 = () => {
  const { executors, setExecutors } = useAppContext();
  let mainExecutor = executors[0];
  let setMainExecutor = (executor) => setExecutors([executor, altExecutor]);
  let altExecutor = executors[1];
  let setAltExecutor = (executor) => setExecutors([mainExecutor, executor]);

  useEffect(() => {
    console.log(executors);
  }, [executors]);

  return (
    <>
      <Head>
        <title>Will Generator - Page 2</title>
      </Head>
      <PersonAdder
        person={mainExecutor}
        setPerson={setMainExecutor}
        description="Full Name of Main Executor"
      />
      {executors[1] == null && (
        <button
          className="p-4 rounded bg-green-100"
          onClick={() => setAltExecutor({ ...personTemplate })}
        >
          + Add alternative executor
        </button>
      )}
      {executors[1] && (
        <>
          <PersonAdder
            person={altExecutor}
            setPerson={setAltExecutor}
            description="Full Name of Main Executor"
          />
          <button
            className="p-4 rounded bg-red-100"
            onClick={() => setAltExecutor(null)}
          >
            Remove alternative executor
          </button>
        </>
      )}
      <NavButtons prev="/" next="page3" />
    </>
  );
};

export default Page2;
