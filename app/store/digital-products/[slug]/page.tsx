import { PortableText, SanityDocument } from "next-sanity";
import Header from "../../../_components/Header";
import Footer from "../../../_components/Footer";
import { client, sanityFetch } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

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
              <div className="text-left lg:text-center text-balance ml-4">
                <img
                  src={imagesrc}
                  alt={product.title}
                  width={1080}
                  height={1080}
                  className="rounded-3xl"
                />
                {product.gallery && product.gallery.length > 0 ? (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {product.gallery.map((image: any) => (
                      <img
                        src={urlForImage(image).width(200).height(200).url()}
                        alt={image.alt}
                        width={1080}
                        height={1080}
                        className="rounded-xl"
                      />
                    ))}
                  </div>
                ) : null}
                <h1 className="py-8 -my-8 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-500 sm:text-6xl">
                  {product.title}
                </h1>
                <p className="mt-4 text-md lg:text-lg text-gray-600">
                  {product.description}
                </p>
                <p className="inline">{product.priceCurrency}</p> {""}
                <p className="inline text-md lg:text-lg text-gray-600">
                  {product.price}
                </p>
                <div
                  key={product._id}
                  className="prose max-w-none text-md lg:text-md lg:mt-4 lg:px-4"
                >
                  <PortableText value={product.instruction} />
                </div>{" "}
                <a
                  href={product.paymentUrl}
                  className="mt-4 text-md lg:text-lg text-gray-600 rounded-xl p-2 font-semibold leading-relaxed text-center"
                >
                  Buy Now!
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </main>
  );
}
