export type InfoCardProps = {
  title: string;
  author: string;
  place?: string;
};

const InfoCard: React.FC<InfoCardProps> = (props) => {
  return (
    <div className="flex max-h-20 w-full flex-col space-y-1 text-sm">
      <div className="m-0 line-clamp-2 font-sans text-base font-medium text-gray">
        {props.title}
      </div>
      <div className="flex place-items-center justify-between italic">
        <div className="line-clamp-1">{props.author}</div>
        <div className="shrink-0">{props.place}</div>
      </div>
    </div>
  );
};

export default InfoCard;

export const testInfo: InfoCardProps = {
  title:
    "Balancing Real-world Interaction and VR Immersion with AI Vision Robotic Arm",
  author:
    "Xiaoran Yang, Yang Zhan, Yukiko Iwasaki, Miaohui Shi, Shijie Tang, Hiroyasu Iwata",
  place: "ICMA, 2023",
};
