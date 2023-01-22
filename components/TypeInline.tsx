import CodePreview from "./CodePreview";

const TypeInline = () => {
  return (
    <div className="mt-6">
      <CodePreview>
        Lorem ipsum dolor{" "}
        <span className="bg-cyan-500 text-white">
          This is an inline element
        </span>{" "}
        sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Vel non aspernatur enim eaque veritatis
        consequatur optio provident obcaecati repudiandae nesciunt asperiores,
        autem quibusdam voluptatum unde repellat id amet minus atque.
        <b className="bg-green-500 py-3 text-white">
          This is another inline element with a vertical padding (doesn't affect
          the content flow)
        </b>
        Natus voluptas magnam sequi sunt fugit earum error sint. Velit iure
        voluptate soluta delectus sunt veniam tempore illo? Inventore pariatur
        labore repellendus!
      </CodePreview>
    </div>
  );
};

export default TypeInline;
