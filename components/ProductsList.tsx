import { FC } from "react";
import { IconType } from "react-icons";
import ProductsItem from "./ProductsItem";

export interface Item {
  href: string;
  name: string;
  description: string;
  icon: IconType;
}

interface Props {
  list: Item[];
}

const ProductsList: FC<Props> = ({ list }) => {
  return (
    <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((item) => (
        <ProductsItem key={item.name} {...item} />
      ))}
    </section>
  );
};

export default ProductsList;
