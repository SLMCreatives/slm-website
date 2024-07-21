import { PRODUCT_QUERYResult } from "../../sanity.types";

export function Products({ products }: { products: PRODUCT_QUERYResult }) {
  return (
    <>
      {products.map((product) => (
        <p key={product._id}>{product.title}</p>
      ))}
    </>
  );
}
