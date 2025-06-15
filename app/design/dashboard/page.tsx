import { Button } from "Sulaiman/S/components/ui/button";

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"></header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                Request your first design
              </h3>
              <p className="text-sm text-muted-foreground">
                You can request a design from your dashboard.
              </p>
              <Button className="mt-4">Request Design</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
