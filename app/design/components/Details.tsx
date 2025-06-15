"use client";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "Sulaiman/S/components/ui/breadcrumb";
import { Calendar } from "Sulaiman/S/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "Sulaiman/S/components/ui/card";
import { Input } from "Sulaiman/S/components/ui/input";
import { Label } from "Sulaiman/S/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "Sulaiman/S/components/ui/select";
import { Textarea } from "Sulaiman/S/components/ui/textarea";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "Sulaiman/S/components/ui/popover";
import { Button } from "Sulaiman/S/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { cn } from "Sulaiman/S/lib/utils";

export default function Component() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="w-full flex flex-col gap-8 p-4">
      <div className="flex flex-row gap-2">
        <Breadcrumb className="w-full flex flex-row gap-6">
          <BreadcrumbItem>Title</BreadcrumbItem>/
          <BreadcrumbItem className="opacity-50">Details</BreadcrumbItem>/
          <BreadcrumbItem className="opacity-50">Timeline</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Order Form</CardTitle>
          <CardDescription>
            Please fill out this form to submit your order. Provide as much
            details as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Title</Label>
              <Input
                id="name"
                type="text"
                className="w-full"
                defaultValue="Poster for Merdeka Promo"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                defaultValue="I need a poster design for Merdeka Promo. I provide services to the mass market."
                className="min-h-32"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="timeline">Timeline</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      date.toLocaleDateString()
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0">
                  <Calendar
                    mode="single"
                    defaultMonth={date}
                    selected={date}
                    onDayClick={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Product Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status" aria-label="Select status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Active</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
