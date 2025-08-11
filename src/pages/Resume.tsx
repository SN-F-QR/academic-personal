import Markdown from "react-markdown";
import ResumeContent from "../content/resume.mdx";
import { ArrowUpRight, BookDown } from "lucide-react";

const Resume: React.FC = () => {
  return (
    <div className="markdown flex h-full w-auto max-w-2xl flex-col place-self-center">
      <ResumeContent />
      <footer>
        <p className="text-xs font-light">Last updated 2025-08-11</p>
      </footer>
    </div>
  );
};

export const RHeader: React.FC<{
  name: string;
  description: string;
  homepage?: string;
  cvUrl?: string;
}> = ({ name, description, homepage, cvUrl }) => {
  return (
    <header>
      <a className="" href={homepage}>
        <h2>
          {name}
          <ArrowUpRight className="ml-1 inline size-4 align-text-top" />
        </h2>
      </a>
      <p className="m-0 text-sm">{description}</p>
      {cvUrl && (
        <a className="mt-1 flex items-center" href={cvUrl} download>
          <BookDown className="mr-1 inline size-4 align-text-top" />
          <p className="m-0 text-sm">Download</p>
        </a>
      )}
    </header>
  );
};

export const RSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <section className="my-4">
      <h3 className="my-4">{title}</h3>
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
    <div className="flex w-full flex-col text-sm md:flex-row">
      <div className="mr-14 mb-1 w-full max-w-32 font-mono font-light text-gray-700">{`${startTime}${endTime ? `-${endTime}` : ""}`}</div>

      <div className="flex flex-1 flex-col space-y-1">
        <div className="text-black">
          {url ? (
            <a className="cursor-pointer text-black" href={url}>
              {title}
              <ArrowUpRight className="ml-1 inline size-3 align-text-top" />
            </a>
          ) : (
            title
          )}
        </div>
        {subtitle && <div className="font-light text-gray-700">{subtitle}</div>}
        {description && (
          <div className="">
            <Markdown
              components={{
                p: ({ ...props }) => (
                  <p
                    className="my-2 text-sm font-light text-gray-700 first:mt-0"
                    {...props}
                  />
                ),
              }}
            >
              {description}
            </Markdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
