import AboutContent from "../content/about.mdx";

const About: React.FC<{ pageStyle: string }> = ({ pageStyle }) => {
  return (
    <div className={pageStyle}>
      <div className="w-full">
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
