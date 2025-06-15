export default function DataLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className="absolute z-50 inset-0 bg-white">{children}</div>;
}
