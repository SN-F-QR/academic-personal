import {
  Newspaper,
  PartyPopper,
  Sparkles,
  Trophy,
  Cat,
  Rabbit,
} from "lucide-react";
import newsData from "../content/news.json";

type IconType = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, IconType> = {
  award: Trophy,
  accept: PartyPopper,
  star: Sparkles,
  cat: Cat,
  rabbit: Rabbit,
};

const NewsWidget = () => {
  const newList: React.ReactNode[] = newsData
    .slice(0, 2)
    .map((item) => (
      <NewsItem
        title={item.title}
        date={item.date}
        type={item.type}
        key={item.title}
      />
    ));

  return (
    <div className="flex h-28 max-w-54 flex-1 flex-col rounded-3xl bg-[#F5F5F5] px-4 py-2 font-serif md:h-auto">
      <span className="flex w-full items-center space-x-1 pt-1 pb-2 text-purple-strong">
        <Newspaper className="size-4" />
        <h3 className="font-serif text-sm font-semibold">News</h3>
      </span>
      <div className="flex h-16 flex-col items-center justify-evenly space-y-1 overflow-hidden pr-1 lg:h-auto">
        {newList}
      </div>
    </div>
  );
};

export const NewsItem: React.FC<{
  title: string;
  date: string;
  type: string;
}> = ({ title, date, type }) => {
  const Icon: IconType = iconMap[type] || PartyPopper;

  return (
    <div className="border-gray-light flex w-full flex-grow items-center justify-between">
      <div className="flex flex-col text-xs">
        <p className="my-0 line-clamp-3 text-gray">{title}</p>
        <p className="my-0 font-light text-gray">{date}</p>
      </div>
      <Icon className="size-5 shrink-0 text-purple-strong" />
    </div>
  );
};

export default NewsWidget;
