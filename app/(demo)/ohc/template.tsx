export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute bg-white dark:bg-black top-0 left-0 z-20 max-w-full">
      {children}
    </div>
  );
}
