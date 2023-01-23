import Link from "next/link";
import { FC } from "react";
import { Item } from "./ProductsList";

interface Props extends Item {}

const ProductsItem: FC<Props> = (item) => {
  return (
    <Link href={item.href}>
      <article className="group flex items-center gap-3 rounded border border-gray-300 p-4 duration-300 hover:bg-gray-100 dark:border-gray-700 hover:dark:bg-gray-800">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gray-100 group-hover:bg-white dark:bg-gray-700 dark:group-hover:bg-gray-600">
          <item.icon className="text-xl text-teal-500 dark:text-teal-300" />
        </div>
        <div>
          <h2 className="text-xl font-bold"> {item.name}</h2>
          <p className="mt-3 text-xs text-gray-400">{item.description}</p>
        </div>
      </article>
    </Link>
  );
};

export default ProductsItem;
