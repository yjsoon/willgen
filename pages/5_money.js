import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import { propertyTemplate } from "../constants/propertyTemplate";
import FieldDropDown from "../components/FieldDropDown";
import useArrayManager from "../components/useArrayManager";
import FieldInputText from "../components/FieldInputText";

const Page5 = () => {
  const { beneficiaries, moneys, setMoneys } = useAppContext();
  const [setMoney, addMoney, removeMoney] = useArrayManager(moneys, setMoneys);

  useEffect(() => {
    console.table(moneys);
  }, [moneys]);

  return (
    <>
      <Head>
        <title>5 — Sum of money</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">Sum of money</h2>
      <p>
        A “sum of money” here refers to a fixed amount of money that you wish to
        allocate to your beneficiaries.
      </p>

      {moneys.map((money, index) => (
        <div key={index} className="relative">
          <div className="rounded divide-y divide-gray-300 bg-gray-100 px-8 py-8 my-4">
            <section className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start mb-4">
              <FieldInputText
                object={money}
                setObject={(money) => setMoney(money, index)}
                description="Money in SGD"
                keyName="money"
              />
              <FieldDropDown
                object={money}
                setObject={(money) => setMoney(money, index)}
                description="Beneficiary"
                keyName="beneficiary"
                values={["", ...beneficiaries.map((ben) => ben.name)]}
              />
              <div />
            </section>
          </div>
          {
            // don't display remove if just one item
            moneys.length > 1 && (
              <button
                className="absolute w-min bottom-4 right-4"
                onClick={() => removeMoney(index)}
              >
                🗑️
              </button>
            )
          }
        </div>
      ))}
      <button
        className="p-4 rounded bg-green-100 block"
        onClick={() => addMoney({ money: "", beneficiary: "" })}
      >
        ➕ Add property
      </button>
      <NavButtons prev="4_property" next="6_distribute" />
    </>
  );
};

export default Page5;
