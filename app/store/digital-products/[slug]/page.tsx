import { PortableText, SanityDocument } from "next-sanity";
import Header from "../../../_components/Header";
import Footer from "../../../_components/Footer";
import { client, sanityFetch } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { buttonVariants } from "Sulaiman/S/components/ui/button";

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

                  {product.gallery && product.gallery.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {product.gallery.map((image: any) => (
                        <img
                          src={urlForImage(image)
                            .width(1080)
                            .height(1080)
                            .url()}
                          alt={image.alt}
                          width={1080}
                          height={1080}
                          className="rounded-xl first-of-type:col-span-2"
                        />
                      ))}
                    </div>
                  ) : null}
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
