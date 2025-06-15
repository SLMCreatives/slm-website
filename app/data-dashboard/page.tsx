import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "Sulaiman/S/components/ui/card";
import { Input } from "Sulaiman/S/components/ui/input";
import { Label } from "Sulaiman/S/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "Sulaiman/S/components/ui/select";
import { Textarea } from "Sulaiman/S/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "Sulaiman/S/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger
} from "Sulaiman/S/components/ui/sheet";
import {
  BoltIcon,
  CheckCircleIcon,
  HandshakeIcon,
  DollarSignIcon,
  MenuIcon,
  UploadCloudIcon,
  LayoutTemplateIcon,
  EyeIcon,
  RocketIcon,
  XIcon
} from "lucide-react";
import { Button } from "Sulaiman/S/components/ui/button";
import PricingSectionCards from "Sulaiman/S/components/price-table";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-stone-950 text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link href="/data-dashboard" className="text-xl font-bold">
            Data-Dash
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="#hero"
                className="hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#templates"
                className="hover:text-blue-600 transition-colors"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="hover:text-blue-600 transition-colors"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-blue-600 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#faqs"
                className="hover:text-blue-600 transition-colors"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black text-white rounded-tl-xl"
              >
                <SheetClose asChild>
                  <XIcon className="w-4 h-4" />
                </SheetClose>
                <div className="flex flex-col gap-4 py-6">
                  <SheetClose asChild>
                    <Link
                      href="#hero"
                      className="text-lg font-medium hover:text-teal-300"
                      prefetch={false}
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#templates"
                      className="text-lg font-medium hover:text-teal-300"
                      prefetch={false}
                    >
                      Templates
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#how-it-works"
                      className="text-lg font-medium hover:text-teal-300"
                      prefetch={false}
                    >
                      How It Works
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#pricing"
                      className="text-lg font-medium hover:text-teal-300"
                      prefetch={false}
                    >
                      Pricing
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#faqs"
                      className="text-lg font-medium hover:text-teal-300"
                      prefetch={false}
                    >
                      FAQs
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#contact"
                      className="text-lg font-medium hover:text-teal-300"
                      prefetch={false}
                    >
                      Contact
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 md:py-28"
        >
          <div className="max-w-5xl mx-auto text-center px-4 space-y-4 pb-10 text-balance">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Turn Your Data into Actionable Insights—in{" "}
              <span className="text-blue-600">1 Week!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Choose a ready-made dashboard template, upload your data, and get
              a live, interactive dashboard—fast & affordable.
            </p>
            <Button
              asChild
              size="lg"
              variant={"default"}
              className="py-2 transition-colors duration-300 shadow-lg bg-stone-900 hover:bg-black text-white drop-shadow-lg hover:drop-shadow-2xl"
            >
              <Link href="#contact">Get Started</Link>
            </Button>
            <div className=" py-10">
              <Image
                src="/data/dashboard.png"
                alt="Dashboard preview"
                width={800}
                height={400}
                className="mx-auto w-full max-w-4xl rounded-lg shadow-xl border border-gray-200"
              />
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Our Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-16 lg:px-0">
              <Card className="p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                  <BoltIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  Speed
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Dashboards live in &le;7 days
                </CardDescription>
              </Card>
              <Card className="p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                  <CheckCircleIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  Simplicity
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Two-page layout: Overview & data table
                </CardDescription>
              </Card>
              <Card className="p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                  <HandshakeIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  Ownership
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Your data & database credentials handed off
                </CardDescription>
              </Card>
              <Card className="p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                  <DollarSignIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  Affordability
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Transparent pricing & volume discounts
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section id="templates" className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Pick Your Dashboard Style
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-16 lg:px-0">
              <Card className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  E-Commerce
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Sales trends, top SKUs, conversion rate
                </CardDescription>
              </Card>
              <Card className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  Survey
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Response rate, score averages, demographics
                </CardDescription>
              </Card>
              <Card className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  Research
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Summary stats, time-series plots, correlations
                </CardDescription>
              </Card>
              <Card className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  Custom Lite
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Select 2–3 widgets
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-16 lg:px-0">
              <Card className="p-6 flex flex-col items-center text-center shadow-md">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                  <UploadCloudIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  1. Upload
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Fill the form & drop your CSV/Excel/JSON
                </CardDescription>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center shadow-md">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                  <LayoutTemplateIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  2. Select
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Choose one of our templates or Custom Lite
                </CardDescription>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center shadow-md">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                  <EyeIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  3. Review
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Preview link delivered in 5 days
                </CardDescription>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center shadow-md">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                  <RocketIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                  4. Deploy
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Receive your dashboard & data access
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              Pricing Snapshot
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-lg shadow-lg mb-6">
                <thead className="bg-gray-100 text-xs lg:text-md font-semibold">
                  <tr>
                    <th className="border-b p-4 text-gray-700 font-semibold">
                      Plan
                    </th>
                    <th className="border-b p-4 text-gray-700 font-semibold text-center">
                      Template(s)
                    </th>
                    <th className="border-b p-4 text-gray-700 font-semibold text-center text-nowrap">
                      Days
                    </th>
                    <th className="border-b p-4 text-gray-700 font-semibold text-nowrap text-right">
                      Price (MYR)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="border-b p-4">Single</td>
                    <td className="border-b p-4 text-center">1</td>
                    <td className="border-b p-4 text-center">5</td>
                    <td className="border-b p-4 font-semibold text-right">
                      600
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-4 text-nowrap">Bundle (×3)</td>
                    <td className="border-b p-4 text-center">3</td>
                    <td className="border-b p-4 text-center">12</td>
                    <td className="border-b p-4 font-semibold text-right">
                      1,500
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-4 text-nowrap">Custom Lite</td>
                    <td className="border-b p-4 text-center">1</td>
                    <td className="border-b p-4 text-center">8</td>
                    <td className="border-b p-4 text-xs italic text-right">
                      Enquire
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="italic text-gray-600">
              * Save 15% when you order 3+ dashboards
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-lg bg-blue-50 border-l-4 border-blue-600 text-left">
                <CardContent className="p-0">
                  <p className="text-lg italic text-gray-700">
                    “We turned 6 months of sales logs into a live dashboard in
                    under a week—game changer!”
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg bg-blue-50 border-l-4 border-blue-600 text-left">
                <CardContent className="p-0">
                  <p className="text-lg italic text-gray-700">
                    “The simplicity and speed blew us away. Plus, we own
                    everything.”
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              FAQs
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  What file formats do you support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  CSV, Excel (.xlsx), JSON
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  Can I switch templates mid-project?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes—just let us know within the first 3 days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  How is my data secured?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We use industry-standard encryption in transit and at rest.
                  You receive full credentials on delivery.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                  Do you offer ongoing updates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes—ask about our maintenance plans after delivery.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Ready to Visualize Your Data?
            </h2>
            <form className="space-y-6 text-left bg-gray-50 p-8 rounded-lg shadow-xl">
              <div>
                <Label
                  htmlFor="name"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="company"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  Company
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="data-upload"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  Upload Your Data
                </Label>
                <Input
                  id="data-upload"
                  type="file"
                  accept=".csv, .xlsx, .json"
                  required
                  className="w-full py-1 justify-center file:justify-center file:py-1 file:px-4 border border-gray-300 rounded-md file:mr-4  file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              <div>
                <Label
                  htmlFor="template-select"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  Choose Template
                </Label>
                <Select required>
                  <SelectTrigger
                    id="template-select"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="ecommerce" className="p-4">
                      E-Commerce
                    </SelectItem>
                    <SelectItem value="survey" className="p-4">
                      Survey
                    </SelectItem>
                    <SelectItem value="research" className="p-4">
                      Research
                    </SelectItem>
                    <SelectItem value="custom" className="p-4">
                      Custom Lite
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="notes"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  Notes (Optional)
                </Label>
                <Textarea
                  id="notes"
                  rows={4}
                  placeholder="Any special requests..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-3 text-lg transition-colors duration-300 shadow-md bg-stone-950 text-white"
              >
                Start My Dashboard
              </Button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-8 mt-12 text-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
            <div className="space-x-4 mb-4 md:mb-0 flex flex-wrap justify-center md:justify-start">
              <Link href="#templates" className="hover:underline px-2 py-1">
                Templates
              </Link>
              <Link href="#how-it-works" className="hover:underline px-2 py-1">
                How It Works
              </Link>
              <Link href="#pricing" className="hover:underline px-2 py-1">
                Pricing
              </Link>
              <Link href="#faqs" className="hover:underline px-2 py-1">
                FAQs
              </Link>
              <Link href="#contact" className="hover:underline px-2 py-1">
                Contact
              </Link>
            </div>
            <div className="text-center md:text-right">
              &copy; {new Date().getFullYear()} SLM Creatives | Kuala Lumpur,
              Malaysia
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
