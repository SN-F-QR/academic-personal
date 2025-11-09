import AcademicContent from "../content/academic.mdx";

const Academic: React.FC<{ pageStyle: string }> = ({ pageStyle }) => {
  return (
    <div className={pageStyle}>
      <h2 className="hidden lg:block">Academic</h2>
      <AcademicContent />
    </div>
  );
};

export default Academic;
