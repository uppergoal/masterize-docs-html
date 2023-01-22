import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title?: string;
}

const CodePreview: FC<Props> = ({ children, title = "Code Preview" }) => {
  return (
    <section className="rounded-xl bg-zinc-100 dark:bg-zinc-700">
      <div className="flex items-center rounded-t-xl bg-zinc-200 py-1 px-4 dark:bg-zinc-600">
        <div className="flex gap-1">
          <div aria-hidden className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div aria-hidden className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div aria-hidden className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <h2 className="ml-2 text-xs text-zinc-500 dark:text-zinc-300">
          {title}
        </h2>
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
};

export default CodePreview;
