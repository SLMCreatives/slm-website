"use client";

import { ArrowRightCircleIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "Sulaiman/S/components/ui/badge";
import { Button } from "Sulaiman/S/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "Sulaiman/S/components/ui/card";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const tokens = 0;

export default function Page() {
  const [status, setStatus] = useState("OFFLINE");
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-row justify-between gap-4 items-center w-full px-2 py-4">
        <Badge className="px-2 py-1 justify-center rounded-full bg-slate-200">
          {tokens === 0 && "Get Tokens"}
          {tokens > 0 && tokens + " Tokens"}
        </Badge>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="flex flex-col gap-4 items-left ">
        <h1 className="font-bold text-4xl py-4">Request Your Design</h1>
        <Card>
          <CardContent className="flex flex-col gap-2">
            <p className="text-md font-bold">How to request a design:</p>
            <div className="flex flex-row gap-2">
              <Badge
                variant="secondary"
                className="h-6 w-6 justify-center rounded-full bg-slate-200"
              >
                1
              </Badge>{" "}
              <p>
                <span className="underline">
                  <em>Sign In</em>
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <Badge
                variant="secondary"
                className="h-6 w-6 justify-center rounded-full bg-slate-200"
              >
                2
              </Badge>{" "}
              <p>
                Purchase{" "}
                <span className="underline">
                  <em>tokens</em>
                </span>{" "}
                for your designs.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <Badge
                variant="secondary"
                className="h-6 w-6 justify-center rounded-full bg-slate-200"
              >
                3
              </Badge>{" "}
              <p>
                Request a <span className="underline">design</span> from your
                <Link href="/design/dashboard"> dashboard</Link>.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <Badge
                variant="secondary"
                className="h-6 w-6 justify-center rounded-full bg-slate-200"
              >
                4
              </Badge>{" "}
              <p>Get notified when your design is ready!</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row flex-wrap items-top justify-center gap-4">
        <div className="flex flex-col gap-4">
          <Card className="w-[300px]">
            <CardContent className="flex flex-col gap-2">
              <p className="text-md font-bold">Pricing:</p>
              <div className="flex flex-col gap-2">
                <p>
                  <ArrowRightCircleIcon className="h-4 w-4 inline mr-2" />1
                  Token = $1.00
                </p>
                <p>
                  {" "}
                  <ArrowRightCircleIcon className="h-4 w-4 inline mr-2" />
                  10 Tokens = $10.00
                </p>
                <p>
                  {" "}
                  <ArrowRightCircleIcon className="h-4 w-4 inline mr-2" />
                  100 Tokens = $90.00
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="w-[300px]">
            <CardContent className="flex flex-col gap-2">
              <p className="text-md font-bold">Design Pricing:</p>
              <div className="flex flex-col gap-2">
                <p>
                  <ArrowRightCircleIcon className="h-4 w-4 inline mr-2" />1
                  Design = $10.00
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
