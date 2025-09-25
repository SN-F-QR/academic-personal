import { ChevronRight } from "lucide-react";
import { useState } from "react";

export type InfoCardProps = {
  title: string;
  author: string;
  showFullAuthor: boolean;
  place?: string;
};

export type ProjectCardProps = InfoCardProps & {
  place: string;
  tags: string[];
  abstract: string;
  link?: string;
};

const InfoCard: React.FC<InfoCardProps> = (props) => {
  return (
    <div className="flex max-h-20 w-full flex-col space-y-1 text-sm">
      <h3 className="m-0 line-clamp-2 font-sans text-base font-medium text-gray-700">
        {props.title}
      </h3>
      <div className="flex place-items-center justify-between space-x-3 italic">
        <div className={props.showFullAuthor ? "" : "line-clamp-1"}>
          {props.author}
        </div>
        <div className="shrink-0">{props.place}</div>
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex w-full flex-col space-y-1 text-sm">
      <div
        className="flex cursor-pointer justify-between space-x-4"
        onClick={() => {
          setIsExpanded((prev) => !prev);
        }}
      >
        <InfoCard {...props} showFullAuthor={isExpanded} />
        <ChevronRight
          className={`size-6 place-self-center ${isExpanded ? "rotate-90" : "rotate-0"} animated`}
        />
      </div>
      <div
        className={`${isExpanded ? "max-h-dvh opacity-100" : "invisible max-h-0 opacity-0"} animated`}
      >
        <div className="flex flex-wrap space-x-2 py-1">
          {props.tags.map((tag) => (
            <TagText text={tag} key={tag} />
          ))}
        </div>
        <h4 className="my-1 font-semibold text-wrap text-gray-800">Abstract</h4>
        <p className="m-0 text-justify text-sm font-normal whitespace-pre-line">
          {props.abstract}
        </p>
        {props.link && (
          <div className="my-1">
            <a
              href={props.link}
              className="text-sm font-semibold text-purple-strong"
            >
              [Link]
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const TagText: React.FC<{ text: string }> = ({ text }) => {
  return <span className="text-purple-strong">{`# ${text}`}</span>;
};

export default InfoCard;
