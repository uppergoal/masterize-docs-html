import Link from "next/link";
import { FC } from "react";

interface Item {
  id: string;
  title: string;
  ref?: string;
}

interface Group {
  id: string;
  title?: string;
  list: Item[];
}

interface Props {
  groups: Group[];
}

const ColumnsList: FC<Props> = ({ groups = [] }) => {
  return (
    <section className="mt-10 grid grid-cols-2 gap-6">
      <h2 className="sr-only">Elements list</h2>

      {groups.map((group) => (
        <section key={group.id}>
          {group.title && <h3 className="text-2xl font-bold">{group.title}</h3>}
          <ul className="mt-4 list-inside list-disc">
            {group.list.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.ref || item.id}`}
                  className="text-blue-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};

export default ColumnsList;
