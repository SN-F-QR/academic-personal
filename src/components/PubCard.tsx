import Gallery, { SingleImage } from "./Gallery";
import IconButton from "./IconButton";
import { DocumentIcon, LinkIcon } from "@heroicons/react/24/outline";
import { imagePaths } from "../utils/imageManager";

export type PubCardProps = {
  title: string;
  author: string;
  conference: string;
  description: string;
  imagePaths: string[];
  link: string;
  pdfPath: string;
  techIcon?: string;
};

const PubCard: React.FC<PubCardProps> = (props) => {
  return (
    <div className="flex h-52 min-w-full space-x-4 rounded-3xl border border-purple-mid bg-[#f5f4ff]/50 px-6 py-2">
      <div className="basis-1/3">
        <Gallery images={props.imagePaths} />
      </div>
      <div className="flex h-full w-full basis-2/3 flex-col py-4 text-sm">
        <div className="line-clamp-2 basis-1/3 font-sans font-semibold text-gray-700">
          {props.title}
        </div>
        <div className="flex basis-1/5 place-items-center justify-between italic">
          <div className="line-clamp-1">{props.author}</div>
          <div className="shrink-0">{props.conference}</div>
        </div>
        <div className="line-clamp-3 basis-1/2 place-items-center text-justify">
          {props.description}
        </div>
        <div className="flex shrink basis-1/4 place-items-end space-x-2 pt-1">
          <IconButton icon={DocumentIcon} name="PDF" url={props.link} />
          <IconButton icon={LinkIcon} name="URL" url="" />
          <span className="w-full grow"></span>
          {props.techIcon && (
            <img
              src={`https://skillicons.dev/icons?i=${props.techIcon}&theme=dark`}
              className="m-0 h-7"
              alt="Tech Icon"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const SinglePubCard: React.FC<PubCardProps> = (props) => {
  return (
    <div className="flex h-52 min-w-full overflow-hidden rounded-3xl border border-purple-mid bg-[#f5f4ff]/50 shadow-md">
      <div className="basis-1/3">
        <SingleImage image={props.imagePaths[0]} />
      </div>
      <div className="flex h-full w-full basis-2/3 flex-col py-4 pr-6 pl-2 text-sm">
        <div className="line-clamp-2 basis-1/3 place-content-center font-sans font-semibold text-gray-700">
          {props.title}
        </div>
        <div className="flex place-items-center justify-between italic">
          <div className="line-clamp-1">{props.author}</div>
          <div className="shrink-0">{props.conference}</div>
        </div>
        <div className="line-clamp-3 basis-1/2 place-content-center place-items-center text-justify">
          {props.description}
        </div>
        <div className="flex shrink basis-1/4 place-items-end space-x-2 pt-1">
          <IconButton icon={DocumentIcon} name="PDF" url={props.link} />
          <IconButton icon={LinkIcon} name="URL" url="" />
          <span className="w-full grow"></span>
          {props.techIcon && (
            <img
              src={`https://skillicons.dev/icons?i=${props.techIcon}&theme=dark`}
              className="m-0 h-7"
              alt="Tech Icon"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PubCard;

export const testProps: PubCardProps = {
  title:
    "Effect of Presentation Methods on User Experiences and Perception in VR Shopping Recommender Systems",
  author: "Yang Zhan, Tatsuo Nakajima",
  conference: "SIGIR-AP 24",
  description:
    "Why people enjoy shopping for virtual goods? We explored how functionality and social experiences come together to shape the novel VR shopping experience.",
  imagePaths: [],
  link: "https://google.com",
  pdfPath: "Test PDF Path",
  techIcon: "unity",
};
