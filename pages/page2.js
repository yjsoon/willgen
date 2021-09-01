import { useAppContext } from "../contexts/AppContext";

const Page2 = () => {
  const { author, setAuthor } = useAppContext();

  return <div>{author.name}</div>;
};

export default Page2;
