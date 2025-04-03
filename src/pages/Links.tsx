import LinksContent from "../content/links.mdx";

const Links: React.FC<{ pageStyle: string }> = ({ pageStyle }) => {
  return (
    <div className={`${pageStyle} place-self-start`}>
      <div className="w-full">
        <h2 className="hidden lg:block">Links</h2>
        <LinksContent />
      </div>
    </div>
  );
};

export default Links;
