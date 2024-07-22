import { SanityDocument } from "next-sanity";
import Header from "../../../_components/Header";
import Footer from "../../../_components/Footer";
import { client, sanityFetch } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { buttonVariants } from "Sulaiman/S/components/ui/button";
import { PortableText } from "next-sanity";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "Sulaiman/S/components/ui/carousel";

const builder = imageUrlBuilder(client);
const urlForImage = (source: any) => {
  return builder.image(source);
};

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await sanityFetch<SanityDocument>({
    query: `*[_type == "product" && slug.current == $slug][0]`,
    params: { slug: params.slug },
  });
  if (!product) {
    throw new Error("Product not found");
  }

  const imagesrc = urlForImage(product.image).width(1080).height(1080).url();

  return (
    <main>
      <Header />
      <div className="flex justify-center items-center bg-white">
        {product ? (
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl pt-24 lg:pt-32 lg:pb-12">
              <div className="text-left ml-4">
                <div className="flex flex-col lg:flex-grow-0">
                  <div>
                    <img
                      src={imagesrc}
                      alt={product.title}
                      width={1080}
                      height={1080}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row flex-nowrap items-center justify-between">
                    <h1 className="py-8  text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                      {product.title}
                      <p className="mt-4 text-lg font-medium text-gray-600">
                        {product.description}
                      </p>
                      <div className="flex flex-row gap-4 items-center justify-between">
                        <p className="mt-4 text-lg font-semibold text-gray-600">
                          {"RM " + product.price + "0"}
                        </p>
                        <a
                          href="{product.paymentUrl}"
                          className={buttonVariants({ variant: "secondary" })}
                        >
                          Buy Now
                          <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
                        </a>
                      </div>
                    </h1>
                  </div>

                  <div
                    key={product._id}
                    className="prose mt-2 p-8 border border-gray-300 rounded-xl"
                  >
                    <PortableText value={product.instruction} />
                  </div>

                  <Carousel className="mt-8">
                    <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselContent>
                      {product?.gallery.map((product: any) => (
                        <CarouselItem key={product._id} className="p-4">
                          <img
                            src={urlForImage(product)
                              .width(1080)
                              .height(1080)
                              .url()}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="rounded-xl"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </main>
  );
}
