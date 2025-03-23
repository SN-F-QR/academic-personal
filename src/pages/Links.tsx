import LinksContent from "../content/links.mdx";

const Links: React.FC<{ pageStyle: string }> = ({ pageStyle }) => {
  return (
    <div className={pageStyle}>
      <div className="w-full">
        <LinksContent />
      </div>
    </div>
  );
};

export default Links;
