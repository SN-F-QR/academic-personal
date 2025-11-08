import AboutContent from "../content/about.mdx";

const About: React.FC<{ pageStyle: string }> = ({ pageStyle }) => {
  return (
    <div className={pageStyle}>
      <div className="w-full">
        <h2 className="hidden lg:block">About</h2>
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
