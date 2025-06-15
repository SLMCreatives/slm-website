"use client";
import { Button } from "Sulaiman/S/components/ui/button";
import { useUser } from "@clerk/nextjs";

export default function Profile() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"></header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center"></div>
          <div className="flex flex-1 items-center justify-left p-8 rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-left gap-4 text-left w-full">
              <h3 className="text-2xl font-bold tracking-tight">
                Account Details
              </h3>
              <hr></hr>
              <div className="flex flex-col gap-3">
                <p className="font-bold -mb-2">Name:</p>
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <p className="font-bold -mb-2">Username:</p>
                <p>{user.username}</p>
                <p className="font-bold -mb-2">Email:</p>
                <p>{user.emailAddresses[0].emailAddress}</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            Edit Profile
          </Button>
        </main>
      </div>
    </div>
  );
}
