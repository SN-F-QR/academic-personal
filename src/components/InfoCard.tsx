import { ChevronRight } from 'lucide-solid';
import { createSignal, Index, Show } from 'solid-js';

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

export function ProjectCard(props: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = createSignal(false);

  return (
    <div class="flex w-full flex-col space-y-1 text-sm">
      <div
        class="flex cursor-pointer justify-between space-x-4"
        onClick={() => {
          setIsExpanded((prev) => !prev);
        }}
      >
        <InfoCard {...props} showFullAuthor={isExpanded()} />
        <ChevronRight
          class={`animated size-6 place-self-center`}
          classList={{ 'rotate-90': isExpanded() }}
        />
      </div>
      <div
        class="animated invisible max-h-0 opacity-0"
        classList={{ 'max-h-screen opacity-100 visible': isExpanded() }}
      >
        <div class="flex flex-wrap space-x-2 py-1">
          <Index each={props.tags}>{(tag) => <TagText text={tag()} />}</Index>
        </div>
        <h4 class="my-1 font-semibold text-wrap text-gray-800">Abstract</h4>
        <p class="m-0 text-justify text-sm font-normal whitespace-pre-line">{props.abstract}</p>
        <Show when={props.link}>
          <div class="my-1">
            <a href={props.link} class="text-sm font-semibold text-purple-strong">
              [Link]
            </a>
          </div>
        </Show>
      </div>
    </div>
  );
}

export function InfoCard(props: InfoCardProps) {
  return (
    <div class="flex w-full flex-col space-y-1 text-sm">
      <h3 class="my-0 line-clamp-2 font-sans text-base font-medium text-gray-700">{props.title}</h3>
      <div class="flex place-items-center justify-between space-x-3 italic">
        <div classList={{ 'line-clamp-1': !props.showFullAuthor }}>{props.author}</div>
        <div class="shrink-0">{props.place}</div>
      </div>
    </div>
  );
}

function TagText({ text }: { text: string }) {
  return <span class="text-purple-strong">{`# ${text}`}</span>;
}
