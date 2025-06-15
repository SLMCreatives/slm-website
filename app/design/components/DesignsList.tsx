"use client";

import {
  Check,
  Clock,
  DeleteIcon,
  Download,
  Link2,
  PlusCircle,
  Trash2,
} from "lucide-react";
import Link from "next/link";

import { Button } from "Sulaiman/S/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "Sulaiman/S/components/ui/card";
import { Input } from "Sulaiman/S/components/ui/input";
import { Label } from "Sulaiman/S/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "Sulaiman/S/components/ui/table";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "Sulaiman/S/components/ui/toggle-group";

const designs = [
  {
    id: 1,
    date: "5 Aug 2024",
    tokens: 100,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est.",
    status: "pending",
  },
  {
    id: 2,
    date: "2 Aug 2024",
    tokens: 100,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est.",
    status: "completed",
  },
  {
    id: 3,
    date: "30 Sept 2024",
    tokens: 100,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est.",
    status: "completed",
  },
];

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Designs</CardTitle>
        <CardDescription>
          A list of all your requested designs.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Tokens</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Links</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {designs.map((design) => (
              <TableRow key={design.id}>
                <TableCell className="font-thin text-nowrap">
                  {design.date}
                </TableCell>
                <TableCell className="font-thin text-center">
                  {design.tokens}
                </TableCell>
                <TableCell className="w-72">{design.title}</TableCell>
                <TableCell className="text-center">
                  {design.status === "pending" && (
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mx-auto"
                      viewBox="0 0 100 101"
                      fill="none"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  )}
                  {design.status === "completed" && (
                    <Check className="h-3.5 w-3.5 text-green-500 mx-auto" />
                  )}
                </TableCell>

                <TableCell className="md:flex hidden">
                  <ToggleGroup
                    type="multiple"
                    defaultValue={["view"]}
                    className="flex flex-wrap md:flex-row gap-2"
                  >
                    <ToggleGroupItem value="view">
                      <Link2 className="h-3.5 w-3.5" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="download">
                      <Download className="h-3.5 w-3.5" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="delete">
                      <Trash2 className="h-3.5 w-3.5" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center p-4">
        <Link href="/design/orders">
          <Button size="sm" variant="ghost" className="gap-1 px-2 py-1">
            <PlusCircle className="h-3.5 w-3.5" />
            Add Design
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
