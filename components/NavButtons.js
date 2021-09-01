import Link from "next/link";

const NavButtons = ({ prev, next }) => {
  return (
    <div className="flex justify-end">
      {prev && (
        <Link href={prev}>
          <button className="p-4 rounded bg-blue-100 border-red-400 mt-4 w-48 mr-4">
            Previous
          </button>
        </Link>
      )}
      {next && (
        <Link href={next}>
          <button className="p-4 rounded bg-blue-100 border-red-400 mt-4 w-48">
            Next
          </button>
        </Link>
      )}
    </div>
  );
};

export default NavButtons;
