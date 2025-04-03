const Resume: React.FC<{ pageStyle: string }> = ({ pageStyle }) => {
  return (
    <div className={pageStyle}>
      <RSection title="Education">
        <RItem
          title="University of California, Berkeley"
          startTime="Aug 2022"
          endTime="Present"
          subtitle="Ph.D. in Computer Science"
          description="Advisor: Trevor Darrell"
        />
      </RSection>
    </div>
  );
};

export const RSection: React.FC<{
  title: string;
  children: React.ReactElement;
}> = ({ title, children }) => {
  return (
    <section className="my-6">
      <h3 className="my-2">{title}</h3>
      <div className="flex flex-col space-y-4">{children}</div>
    </section>
  );
};

export const RItem: React.FC<{
  title: string;
  startTime: string;
  endTime?: string;
  subtitle?: string;
  description?: string;
  url?: string;
}> = ({ title, startTime, endTime, subtitle, description, url }) => {
  return (
    <div className="flex flex-col text-sm md:flex-row md:justify-between">
      <div className="py-2 font-light text-gray">{`${startTime}${endTime ? ` - ${endTime}` : ""}`}</div>

      <div className="flex flex-col">
        <div className="flex-1">{url ? <a href={url}>{title}</a> : title}</div>
        {subtitle && <div className="flex-1 text-gray-700">{subtitle}</div>}
        {description && (
          <div className="flex-1 text-sm font-light text-gray-700">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
