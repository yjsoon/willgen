import Link from "next/link";

const NavButtons = ({ prev, next }) => {
  return (
    <div className="flex justify-end mt-8">
      {prev && (
        <Link href={prev}>
          <button className="p-4 rounded bg-blue-100 w-40 mr-4">
            Previous
          </button>
        </Link>
      )}
      {next && (
        <Link href={next}>
          <button className="p-4 rounded bg-blue-200 w-40">Next</button>
        </Link>
      )}
    </div>
  );
};

export default NavButtons;
