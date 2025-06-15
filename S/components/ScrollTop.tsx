import { ArrowBigUp } from "lucide-react";

export default function ScrollTop() {
  return (
    <div className="fixed bottom-4 right-4 bg-black hover:bg-slate-600 rounded-full p-2 flex items-center justify-center">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowBigUp className="w-8 h-8 text-white hover:text-slate-900" />
      </button>
    </div>
  );
}
