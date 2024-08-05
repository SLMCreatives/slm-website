import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "Sulaiman/S/components/ui/sheet";
import { Button } from "Sulaiman/S/components/ui/button";
import { Menu, Search } from "lucide-react";
import { Input } from "Sulaiman/S/components/ui/input";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute bg-white top-0 left-0 right-0 mx-auto">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 bg-white z-20">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="/login"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <div className="h-8 w-8">
                <Image
                  src="/sulaiman.jpg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </Link>
            <Link
              href="/dashboard"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/designs"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Designs
            </Link>
            <Link
              href="/dashboard/orders"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="/dashboard/settings"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Settings
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 ">
              <nav className="grid gap-6 text-lg font-medium justify-end items-end text-right mb-10">
                <Link
                  href="/dashboard"
                  className="flex items-end justify-end gap-2 text-lg font-semibold"
                >
                  <div className="h-10 w-10 justify-right">
                    <Image
                      src="/sulaiman.jpg"
                      alt="logo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                </Link>
                <Link
                  href="/dashboard"
                  className="text-foreground transition-colors hover:text-foreground"
                >
                  Dashboard
                </Link>
                <Link
                  href="dashboard/designs"
                  className="text-foreground transition-colors hover:text-foreground"
                >
                  Designs
                </Link>
                <Link
                  href="/dashboard/orders"
                  className="text-foreground transition-colors hover:text-foreground"
                >
                  Orders
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search Designs..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          </div>
        </header>
        {children}
      </div>
    </>
  );
}
