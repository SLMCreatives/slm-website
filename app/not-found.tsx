import Link from "next/link";
import { Button } from "Sulaiman/S/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <h2 className="text-3xl font-bold">404: Not Found</h2>
      <p className="text-md mt-2">
        I'm sorry, we couldn't find that page you were looking for
      </p>
      <Button variant={"outline"} className="mt-4">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
