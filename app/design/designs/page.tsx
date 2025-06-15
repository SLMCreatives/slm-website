import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "Sulaiman/S/components/ui/badge";
import { Button } from "Sulaiman/S/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "Sulaiman/S/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "Sulaiman/S/components/ui/dropdown-menu";
import { Input } from "Sulaiman/S/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "Sulaiman/S/components/ui/sheet";
import Details from "../components/Details";
import Status from "../components/Status";
import { Table } from "Sulaiman/S/components/ui/table";
import DesignsList from "../components/DesignsList";

export default function Designs() {
  return (
    <div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"></header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex flex-row flex-wrap gap-2 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <DesignsList />
          </div>
        </main>
      </div>
    </div>
  );
}
