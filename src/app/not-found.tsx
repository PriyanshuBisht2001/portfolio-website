import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-4">
      <h2 className="text-2xl text-secondary-200 font-bold">Oops !</h2>
      <p className="text-light-300">
        You have found a page i am still thinking about
      </p>
      <Link
        className="underline text-slate-600 hover:no-underline text-lg"
        href="/"
      >
        Explore more about me
      </Link>
    </div>
  );
}
