import Link from "next/link";

const TitleWithEdit = ({ title, link }) => {
  return (
    <div className="relative pt-2">
      <h2>{title}</h2>
      <Link href={link}>
        <p className="absolute right-1 bottom-0 text-blue-500">✏ Edit</p>
      </Link>
    </div>
  );
};

export default TitleWithEdit;
