import AcademicContent from "../content/academic.mdx";

const Academic: React.FC<{ pageStyle: string }> = ({ pageStyle }) => {
  return (
    <div className={pageStyle}>
      <AcademicContent />
    </div>
  );
};

export default Academic;
