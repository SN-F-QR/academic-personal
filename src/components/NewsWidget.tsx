import {
  Newspaper,
  PartyPopper,
  Sparkles,
  Trophy,
  Cat,
  Rabbit,
  type LucideIcon,
} from 'lucide-solid';
import newsData from '../contents/news.json';
import { A } from '@solidjs/router';
import { Show } from 'solid-js';

const iconMap: Record<string, LucideIcon> = {
  award: Trophy,
  accept: PartyPopper,
  star: Sparkles,
  cat: Cat,
  rabbit: Rabbit,
};

function NewsWidget() {
  return (
    <div class="flex h-28 max-w-54 flex-1 flex-col rounded-3xl bg-[#F5F5F5] px-4 py-2 font-serif shadow-sm md:h-auto">
      <span class="flex w-full items-center space-x-1 pt-1 pb-2 text-purple-strong">
        <Newspaper class="size-4" />
        <h3 class="font-serif text-sm font-semibold">News</h3>
      </span>
      <div class="flex h-16 flex-col items-center justify-evenly space-y-1 overflow-hidden pr-1 lg:h-auto">
        <NewsItem {...newsData[0]} />
        <div class="hidden w-full lg:block">
          <NewsItem {...newsData[1]} />
        </div>
      </div>
    </div>
  );
}

export function NewsItem({
  title,
  date,
  type,
  link,
}: {
  title: string;
  date: string;
  type: string;
  link?: string;
}) {
  const Icon: LucideIcon = iconMap[type] ?? PartyPopper;
  const Title = <p class="my-0 line-clamp-3 text-gray-700">{title}</p>;

  return (
    <div class="border-gray-light flex w-full grow items-center justify-between select-none">
      <div class="flex flex-col text-xs">
        <Show when={link} fallback={Title}>
          <A
            href={link ?? ''}
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-purple-mid decoration-dashed decoration-2"
          >
            {Title}
          </A>
        </Show>
        <p class="my-0 font-light text-gray">{date}</p>
      </div>
      <Icon class="size-5 shrink-0 text-purple-strong" />
    </div>
  );
}

export default NewsWidget;
