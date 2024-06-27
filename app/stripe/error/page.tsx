import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const error = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-12 pt-12 min-h-96">
      <h1 className="text-4xl font-bold">Oh no! Something went wrong!</h1>
      <Link href="/" className="flex text-primary text-sm">
        {" "}
        <ArrowLeft></ArrowLeft> Click here to go back!
      </Link>
    </main>
  );
};

export default error;
