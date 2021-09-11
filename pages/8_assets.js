import Head from "next/head";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

import NavButtons from "../components/NavButtons";
import { propertyTemplate } from "../constants/propertyTemplate";
import FieldDropDown from "../components/FieldDropDown";
import useArrayManager from "../components/useArrayManager";
import FieldInputText from "../components/FieldInputText";
import { assetCategories } from "../constants/assetCategories";

const Page5 = () => {
  const { assets, setAssets } = useAppContext();
  const [setAsset, addAsset, removeAsset] = useArrayManager(assets, setAssets);

  useEffect(() => {
    console.table(assets);
  }, [assets]);

  return (
    <>
      <Head>
        <title>8 — Asset specifics</title>
      </Head>
      <h2 className="text-3xl font-bold mb-5 text-gray-500">
        Specifics of assets
      </h2>
      <p>
        The information provided here will be attached as an appendix to your
        Will. These instructions are not compulsory and may not be legally
        binding, but they may help the executor(s) locate your assets easily.
      </p>

      {assets.map((asset, index) => (
        <div key={index} className="relative">
          <div className="rounded bg-gray-100 px-8 py-8 my-4">
            <section className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-8 items-start mb-4">
              <FieldInputText
                object={asset}
                setObject={(asset) => setAsset(asset, index)}
                description="Asset name"
                keyName="name"
                placeholder="e.g. Painting"
              />
              <FieldDropDown
                object={asset}
                setObject={(asset) => setAsset(asset, index)}
                description="Category"
                keyName="category"
                values={assetCategories}
              />
              <FieldInputText
                object={asset}
                setObject={(asset) => setAsset(asset, index)}
                description="Value in SGD"
                keyName="value"
                placeholder="e.g. 100000"
              />
            </section>

            <label className="block mb-4" htmlFor="description">
              <span className="text-gray-700">Description</span>
              <textarea
                type="text"
                name="description"
                className="mt-2 block w-full"
                value={asset.description}
                onChange={(e) =>
                  setAsset({ ...asset, description: e.target.value }, index)
                }
                placeholder="Where to find?"
                rows={5}
              />
            </label>
          </div>
          {
            // don't display remove if just one item
            assets.length > 1 && (
              <button
                className="absolute w-min bottom-4 right-4"
                onClick={() => removeAsset(index)}
              >
                🗑️
              </button>
            )
          }
        </div>
      ))}
      <button
        className="p-4 rounded bg-green-100 block"
        onClick={() => addAsset({})}
      >
        ➕ Add asset
      </button>
      <NavButtons prev="4_property" next="6_distribute" />
    </>
  );
};

export default Page5;
