import Markdown from "react-markdown";
import ResumeContent from "../content/resume.mdx";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Resume: React.FC = () => {
  return (
    <div className="markdown flex h-full w-auto max-w-2xl flex-col place-self-center overflow-hidden">
      <ResumeContent />
      <footer>
        <p className="text-xs font-light">Last updated 2025/04/03</p>
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
          <ArrowUpRightIcon className="ml-1 inline size-4 align-text-top" />
        </h2>
      </a>
      <p className="m-0 text-sm">{description}</p>
      {cvUrl && (
        <a className="text-sm" href={cvUrl} download>
          Download
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
      <div className="mr-12 mb-1 w-full max-w-28 font-light text-gray-700">{`${startTime}${endTime ? ` - ${endTime}` : ""}`}</div>

      <div className="flex flex-1 flex-col space-y-1">
        <div className="text-black">
          {url ? (
            <a className="cursor-pointer text-black" href={url}>
              {title}
              <ArrowUpRightIcon className="ml-1 inline size-3 align-text-top" />
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
                p: ({ node, ...props }) => (
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
