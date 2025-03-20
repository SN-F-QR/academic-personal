import AcademicContent from "../content/academic.mdx";
import PubCard, { PubCardProps } from "../components/PubCard";

const Academic = () => {
  return (
    <div className="markdown flex h-full flex-col place-self-center pt-16 pb-20">
      <AcademicContent />
    </div>
  );
};

export default Academic;
