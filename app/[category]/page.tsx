import { simplifiedProduct } from "../interace";
import { client } from "../lib/sanity";
import ProductCard from "../components/ProductCard";

async function getData(cateogry: string) {
  let query;

  if (cateogry == "all") {
    query = `*[_type == "product"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;
  } else {
    query = `*[_type == "product" && category->name == "${cateogry}"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;
  }

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white m-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductCard
              _id={product._id}
              imageUrl={product.imageUrl}
              slug={product.slug}
              name={product.name}
              categoryName={product.categoryName}
              key={product._id}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
