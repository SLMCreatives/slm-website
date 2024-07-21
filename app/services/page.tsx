import Header from "../_components/Header";

export default function Services() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-white">
        <Header />
        <div className="text-center z-10 px-12 lg:w-1/2 left-0 text-balance space-y-8">
          <div className="text-center">
            <h1 className="py-8 -my-8 text-5xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-emerald-600 to-emerald-900 ">
              Digital Marketing Solutions
            </h1>
            <p className="mt-6 text-lg leading-8  text-gray-600">
              I am here to help you solve your marketing problems and allow you
              to achieve your business goals.
            </p>
          </div>
          <div className="text-center flex items-center justify-center gap-4">
            <a
              className="mt-6 text-lg leading-8  text-black bg-emerald-300 py-2 px-6 rounded-full hover:bg-emerald-700 hover:text-white"
              href="/services/content"
            >
              Social Media Marketing
            </a>
            <a
              className="mt-6 text-lg leading-8  text-black bg-emerald-300 py-2 px-6 rounded-full hover:bg-emerald-700 hover:text-white"
              href="/services/website"
            >
              Website Development
            </a>
            <a
              className="mt-6 text-lg leading-8  text-black bg-emerald-300 py-2 px-6 rounded-full hover:bg-emerald-700 hover:text-white"
              href="/services/lead-gen"
            >
              Lead Generation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
