import { ArrowLeftIcon, ArrowRightIcon, Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "Sulaiman/app/_components/ThemeToggle";
import { Button } from "Sulaiman/S/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "Sulaiman/S/components/ui/drawer";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <div className="">
        <div className="absolute bg-fixed w-full h-screen -z-10  bg-cover bg-center mx-auto bg-[url('https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          {" "}
          <div className="w-full h-full bg-gradient-to-b from-white dark:from-black/70 to-transparen dark:mix-blend-multiply"></div>
        </div>
      </div>
      <section className="flex flex-row justify-between items-center p-6">
        <div className="flex flex-row items-center gap-2 divide-x-2 divide-cyan-500 dark:divide-white group transition-all duration-300">
          <Link href="/ohc">
            <h1 className="text-3xl font-light">
              <span className="text-cyan-500">O</span>HC
            </h1>
          </Link>
          <p className="pl-2 hidden group-hover:inline ">
            OneHealthCareConsultancy
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <ThemeToggle />
          <Drawer direction="right">
            <DrawerTrigger>
              <div>
                <Menu className="w-6 h-6" />
              </div>
            </DrawerTrigger>
            <DrawerContent className="bg-white dark:bg-black dark:text-white absolute top-0 right-0 p-4 h-screen items-start gap-4 w-[50%] md:w-1/3 lg:w-[15rem] border-none shadow-xl shadow-left dark:shadow-cyan-500/50">
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription>
                <div className="flex flex-col gap-2 px-4 text-md">
                  <Link href="/ohc" className="text-cyan-500 font-bold">
                    Home
                  </Link>
                  <Link href="#" className="hover:text-cyan-500">
                    Our Team
                  </Link>
                  <Link href="#" className="hover:text-cyan-500">
                    Services
                  </Link>
                  <Link href="#" className="hover:text-cyan-500">
                    Contact
                  </Link>
                </div>
              </DrawerDescription>
              <DrawerClose>
                <XIcon className="w-4 h-4 ml-4" />
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        </div>
      </section>{" "}
      <section className="flex flex-col gap-0 items-center justify-center -mt-10 mb-40 h-[75vh] my-20 p-4">
        <div className="flex flex-col gap-2 text-center text-balance mx-10 lg:mx-72">
          <p className="font-bold text-4xl lg:text-6xl">
            <span className="text-cyan-500">One</span> Healthcare Consultants
          </p>
          <p className="text-lg">One Team, One Goal, One Solution</p>

          <p className="text-balance">
            We provide efficient and cost-effective specialized design solutions
            tailored to meet client’s demands, facilitating key decisions, as
            well as providing fundamental insights on the latest trends and
            products for a fully functional healthcare facility.
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center p-4">
          <Button variant="outline" className="bg-transparent">
            Get Started
          </Button>
          <Button variant="link" className="hover:underline">
            Contact Us
          </Button>
        </div>
      </section>
      <div className="flex flex-col gap-20 lg:mx-40 2xl:mx-96 md:mx-12 mx-4 ">
        <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 m-6 mt-20 ">
          <Image
            src="/ohc/hosp.jpg"
            alt="hosp"
            width={600}
            height={300}
            className="rounded-2xl object-cover lg:w-full lg:h-96"
          />
          <div className="flex flex-col items-left justify-center gap-2 p-8">
            <p className="font-bold text-cyan-500 text-xl">Our Mission:</p>
            <p className="mb-4">
              To drive and shape the future of healthcase facilities towards the
              Sustainable Design Environment (SDE).
            </p>
            <hr></hr>
            <p className="font-bold mt-4 text-cyan-500  text-xl">Our Vision:</p>
            <p>
              To become one of the elite and trusted health facility planner &
              medical engineering consulting. Recognized for the quality of
              services and integrity of our people.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 m-6">
          <div className="flex flex-col items-left justify-center gap-2 p-8">
            <p className="font-bold text-cyan-500  text-xl">One Team:</p>
            <p>
              We have a collective experience of 25 years in the healthcare
              industry. With our broad experience working on healthcare projects
              both domestically and overseas.
            </p>
            <p>
              We aim to offer{" "}
              <span className="text-cyan-500">One Stop Design</span> and{" "}
              <span className="text-cyan-500">
                Engineering Consulting Services
              </span>{" "}
              with expertise and skilled set in the field of Healthcare Facility
              Planning, Medical Equipment Planning, Mechanical / Electrical
              Engineering and Project Management.
            </p>
          </div>
          <Image
            src="/ohc/team.jpg"
            alt="hosp"
            width={600}
            height={300}
            className="rounded-2xl object-cover"
          />
        </section>
        <section
          className="grid grid-cols-1 md:grid-cols-2 justify-center items-top gap-y-8 md:gap-x-8 m-6"
          id="team"
        >
          <p className="font-bold text-center col-span-1 md:col-span-2 text-cyan-500 text-2xl m-4">
            Our Core Team:
          </p>
          <div className="flex flex-col items-left justify-top gap-4 p-8 bg-slate-100 dark:bg-slate-800 rounded-2xl">
            <Image
              src="/ohc/head1.jpg"
              alt="hosp"
              width={300}
              height={300}
              className="rounded-2xl object-cover aspect-square object-top w-full"
            />
            <div className="flex flex-col gap-2 mt-4">
              <p className="font-bold text-xl text-cyan-500">
                MEJOR. GEN. (R) DATO’ (DR) ROSMAN BIN AB RAHMAN{" "}
              </p>
              <p className="opacity-50">Advisor & Healthcare Lead </p>
              <p>
                Dr. Rosman has served in diverse leadership capacities,
                including on the Board of Directors for the ASEAN Center of
                Military Medicine, the Commanding Officer of Tuanku Mizan
                Military Hospital, Kuala Lumpur, the Inspector General Of The
                Malaysian Armed Forces Health Services And As Chairman Of
                Organizing Committees For Military Medicine Conferences.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-left justify-top gap-4 p-8 bg-slate-100 dark:bg-slate-800 rounded-2xl">
            <Image
              src="/ohc/head2.jpg"
              alt="hosp"
              width={300}
              height={300}
              className="rounded-2xl object-cover aspect-square object-top w-full"
            />
            <div className="flex flex-col gap-2 mt-4">
              <p className="font-bold text-xl text-cyan-500">
                MUHAMMAD KAREEM BIN ADBUL KASIM
              </p>
              <p className="opacity-50">Principal Managing Partner</p>
              <p>
                M. Kareem has consistently demonstrated a commitment to
                excellence and innovation in every role undertaken. Beginning in
                2004 at Engineering & Environmental Consultant Sdn Bhd (EEC), He
                has established himself as a Senior Mechanical Engineer,
                contributing his skills to building services consultancy.
              </p>
            </div>
          </div>
        </section>
        {/* Services */}
        <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-top gap-x-4 md:gap-x-2 gap-y-8 m-6">
          <p className="font-bold text-center col-span-1 md:col-span-4 text-cyan-500 text-2xl">
            Our Services:
          </p>
          <div className="flex flex-col items-left justify-top gap-4 px-2">
            <Image
              src="/ohc/hfp.jpg"
              alt="hosp"
              width={300}
              height={300}
              className="rounded-2xl object-cover aspect-square object-top w-full"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl text-cyan-500">HFP</p>
              <p className="opacity-50">Health Facility Planning</p>
              <ul className="list-disc list-inside">
                <li>Functional Brief</li>
                <li>Project Definition Plans (PDP)</li>
                <li>Schedules of Department</li>
                <li>Accommodation (SOD) & (SOA)</li>
                <li>Department Planning</li>
                <li>Flow Diagrams & Adjacencies</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-left justify-top gap-4 px-2">
            <Image
              src="/ohc/plans.jpg"
              alt="hosp"
              width={300}
              height={300}
              className="rounded-2xl object-cover aspect-square object-top w-full"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl text-cyan-500">HFA </p>
              <p className="opacity-50">Health Facility Architecture </p>
              <ul className="list-disc list-inside">
                <li>Site Planning</li>
                <li>Architectural Design</li>
                <li>Concept Planning</li>
                <li>Design Development</li>
                <li>Design Management</li>
                <li>Specs & Tender</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-left justify-top gap-4 px-2">
            <Image
              src="/ohc/equipment.jpg"
              alt="hosp"
              width={300}
              height={300}
              className="rounded-2xl object-cover aspect-square object-top w-full"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl text-cyan-500">MEP</p>
              <p className="opacity-50">Medical Equipment Planning</p>
              <ul className="list-disc list-inside">
                <li>Fully Integrated MEP services</li>
                <li>Coordinated Interfaces (MEQ, Architechcure, IT)</li>
                <li>Sustainable Solutions (Maintenance/Green)</li>
                <li>
                  Mechanical & Electrival Brief(Technical Description of M&E
                  facilities)
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-left justify-top gap-2 px-2">
            <Image
              src="/ohc/budget.jpg"
              alt="hosp"
              width={300}
              height={300}
              className="rounded-2xl object-cover aspect-square object-top w-full"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl text-cyan-500">MEQ </p>
              <p className="opacity-50">Medical Equipment Quotation</p>
              <ul className="list-disc list-inside">
                <li>
                  Technological Needs tailored to clinical requirements
                  (Ascertain types and complexity of equipment to optimise
                  workflow)
                </li>
                <li>Equipment Budget Planning (Cost effective outcome)</li>
                <li>
                  Room by Room Equipment specification (Develop suitable
                  placement of equipment)
                </li>
                <li>
                  Timely Basis on equipment implementation (Delivery,
                  installation, commissioning)
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="text-xs opacity-50 flex flex-row justify-between items-center p-6">
        <Button variant="link">Get In Touch</Button>{" "}
        <div>
          Copyright ©{" "}
          <Link href="/ohc" className="hover:text-cyan-600">
            OneHealthcareConsultant
          </Link>{" "}
          2024
        </div>
      </div>
    </div>
  );
}
