import CodePreview from "./CodePreview";

const TypeBlock = () => {
  return (
    <div className="mt-6">
      <CodePreview>
        <div className="bg-cyan-500 py-3 text-white">This is a block level</div>
        <div className="bg-green-500 py-3 text-white">
          This is another block level
        </div>
      </CodePreview>
    </div>
  );
};

export default TypeBlock;
