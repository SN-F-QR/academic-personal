import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export type InfoCardProps = {
  title: string;
  author: string;
  place?: string;
};

export type ProjectCardProps = InfoCardProps & {
  place: string;
  tags: string[];
  abstract: string;
  link: string;
};

const InfoCard: React.FC<InfoCardProps> = (props) => {
  return (
    <div className="flex max-h-20 w-full flex-col space-y-1 text-sm">
      <h3 className="m-0 line-clamp-2 font-sans text-base font-medium text-gray-700">
        {props.title}
      </h3>
      <div className="flex place-items-center justify-between italic">
        <div className="line-clamp-1">{props.author}</div>
        <div className="shrink-0">{props.place}</div>
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex w-full flex-col space-y-1 text-sm">
      <div
        className="flex cursor-pointer justify-between space-x-4"
        onClick={() => {
          setIsExpanded((prev) => !prev);
        }}
      >
        <InfoCard {...props} />
        <ChevronRightIcon
          className={`size-6 place-self-center ${isExpanded ? "rotate-90" : "rotate-0"} animated`}
        />
      </div>
      <div
        className={`${isExpanded ? "max-h-96 opacity-100" : "invisible max-h-0 opacity-0"} animated`}
      >
        <div className="flex flex-wrap space-x-2 py-1">
          {props.tags.map((tag) => (
            <TagText text={tag} key={tag} />
          ))}
        </div>
        <h4 className="my-1 font-semibold text-gray-800">Abstract</h4>
        <p className="m-0 text-justify text-sm font-normal">{props.abstract}</p>
      </div>
    </div>
  );
};

const TagText: React.FC<{ text: string }> = ({ text }) => {
  return <span className="text-purple-strong">{`# ${text}`}</span>;
};

export default InfoCard;

export const testInfo: ProjectCardProps = {
  title:
    "Balancing Real-world Interaction and VR Immersion with AI Vision Robotic Arm",
  author:
    "Xiaoran Yang, Yang Zhan, Yukiko Iwasaki, Miaohui Shi, Shijie Tang, Hiroyasu Iwata",
  place: "ICMA, 2023",
  tags: ["VR", "AI", "Robotics"],
  abstract:
    "With the widespread adoption of Virtual Reality (VR) technology, VR devices can be more realistic and make the tasks they perform feel real to the user. It is this sense of realism that makes more and more people are using VR headsets. While using VR devices, the need to interact with the real world will also exist. For example, when people are using a VR headset to study and work, they have a physiological need (thirst, hunger, etc.), and need to interact with reality. But the closed nature of the VR headset causes this interaction to be very disruptive to the immersion of the user’s current task. To address this issue, we propose an interaction method that combines an AI vision algorithm and a robotic arm to preserve immersion during task performance in VR. This method addresses the challenge of interacting with the real world while using closed VR devices. Our experiments show that our method outperforms see-through and mapping methods, allowing users to quickly re-immerse themselves after interruptions and reducing interruptions during real-world task performance. Future research will focus on improving this method without sensitization and expanding the range of real-world operations that can be performed.",
  link: "https://www.example.com",
};
