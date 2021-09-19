import Link from "next/link";

const NavButtons = ({
  prev,
  prevLabel = "Previous",
  next,
  nextLabel = "Next",
}) => {
  return (
    <div className="flex justify-end mt-8">
      {prev && (
        <Link href={prev}>
          <button className="p-4 rounded bg-blue-100 w-40 mr-4">
            {prevLabel}
          </button>
        </Link>
      )}
      {next && (
        <Link href={next}>
          <button className="p-4 rounded bg-blue-200 w-40">{nextLabel}</button>
        </Link>
      )}
    </div>
  );
};

export default NavButtons;
