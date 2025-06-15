"use client";

import { Button } from "Sulaiman/S/components/ui/button";
import { Card, CardContent } from "Sulaiman/S/components/ui/card";
import Details from "../components/Details";

export default function Orders() {
  return (
    <div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"></header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div
            id="button"
            className="flex flex-row flex-wrap gap-2 items-center justify-left"
          >
            <Button
              variant="outline"
              className="w-10 h-10 border-dashed border-2"
              onClick={() => newOrder()}
            >
              <p className="text-xl">+</p>
            </Button>
          </div>
          <div
            id="order-form"
            className="hidden flex-row flex-wrap gap-2 items-center justify-center rounded-lg border border-dashed shadow-sm "
          >
            <Details />
            <Button variant="outline" className="mt-4">
              Submit Order
            </Button>
            <Button
              onClick={() => cancelOrder()}
              variant="outline"
              className="mt-4"
            >
              Cancel
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}

function newOrder() {
  console.log("new order");
  document.getElementById("button")?.classList.add("hidden");
  document.getElementById("order-form")?.classList.replace("hidden", "flex");
}

function cancelOrder() {
  console.log("cancel order");
  document.getElementById("button")?.classList.replace("hidden", "flex");
  document.getElementById("order-form")?.classList.replace("flex", "hidden");
}
