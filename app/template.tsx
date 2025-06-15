import NewHeader from "Sulaiman/S/components/NewHeader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto rounded-lg shadow-lg dark:shadow-slate-700">
      {" "}
      <NewHeader />
      {children}
      <div className=" flex flex-col gap-4 p-6 dark:bg-black ">
        <p className="relative bottom-0 text-xs font-thin opacity-30 text-right">
          {" "}
          Copyright © SLM Creatives 2025
        </p>
      </div>
    </div>
  );
}
