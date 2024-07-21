import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    name: "Social Media Marketing",
    href: "/services/content",
    desc: "Creative content creation based on marketing strategy",
  },
  {
    name: "Website Development",
    href: "/services/website",
    desc: "Modern web experience for your brand",
  },
  {
    name: "Lead Generation",
    href: "/services/lead-gen",
    desc: "Generate quality leads and convert them into customers",
  },
];

export default function ServicesMap() {
  return (
    <main className="flex flex-col items-center justify-center lg:w-full mt-12">
      <p className="text-black font-bold uppercase">
        Complete Digital Marketing Services
      </p>
      <div className="flex lg:flex-row flex-col gap-12 justify-center rounded-3xl items-center mx-auto p-12 mt-2 border-2 border-dashed border-slate-950/50">
        {services.map((service) => (
          <motion.div
            key={service.name}
            className="lg:size-60 size-60 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 group lg:p-6 p-4 hover:cursor-pointer hover:from-emerald-700 hover:to-teal-800 border-separate border-[10px] border-white border-dashed"
            whileHover={{ scale: 1.3, zIndex: 10, rotateZ: 180 }}
            initial={{ scale: 1, zIndex: 0, rotateZ: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 200,
              ease: "easeInOut",
            }}
          >
            <Link href={service.href}>
              <p
                key={service.name}
                className=" relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-2xl group-hover:scale-0 group-hover:opacity-0 group-hover:h-0 transition-all duration-800"
              >
                {service.name}
              </p>
              <p className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center rotate-180 text-lg font-light hidden group-hover:block">
                {service.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
