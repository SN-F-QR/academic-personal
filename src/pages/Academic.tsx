import AcademicContent from "../content/academic.mdx";
import PubCard, { PubCardProps } from "../components/PubCard";

const Academic = () => {
  const testProps: PubCardProps = {
    title: "Test Title",
    author: "Test Author",
    conference: "Test Conference",
    description: "Test Description",
    imagePaths: [
      "/src/assets/test3.jpg",
      "/src/assets/test2.png",
      "/src/assets/test.jpg",
    ],
    link: "Test Link",
    pdfPath: "Test PDF Path",
    techIcon: "Test Tech Icon",
  };

  return (
    <div className="markdown flex h-full flex-col place-self-center pt-16 pb-20">
      <AcademicContent />
      <PubCard {...testProps} />
    </div>
  );
};

export default Academic;
