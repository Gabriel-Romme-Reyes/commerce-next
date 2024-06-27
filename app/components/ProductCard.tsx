import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  _id,
  imageUrl,
  slug,
  name,
  categoryName,
  price,
}: {
  _id: string;
  imageUrl: string;
  slug: string;
  name: string;
  categoryName: string;
  price: number;
}) => {
  return (
    <div key={_id} className="group relative hover:shadow-xl border">
      <Link href={`/product/${slug}`}>
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <Image
            src={imageUrl}
            alt="Product image"
            className="w-full h-full object-cover object-center lg:h-full lg:w-full"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4 flex justify-between px-4 py-5">
          <div>
            <h3 className="text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{categoryName}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
