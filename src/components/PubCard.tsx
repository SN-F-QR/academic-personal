import IconButton from './IconButton';
import { Show, createSignal } from 'solid-js';
import { FileText, Link, X } from 'lucide-solid';

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

function SinglePubCard(props: PubCardProps) {
  return (
    <div class="min-w-full overflow-hidden rounded-3xl bg-[#f5f4ff]/50 shadow-sm">
      <div class="h-full sm:flex">
        <div class="basis-1/3 sm:shrink-0">
          <SingleImage image={props.imagePaths[0]} />
        </div>
        <div class="basis-2/3 px-4 py-4 sm:px-6">
          <CardInfo {...props} />
        </div>
      </div>
    </div>
  );
}

function CardInfo(props: PubCardProps) {
  return (
    <div class="flex h-full w-full flex-col justify-between space-y-1 text-sm">
      <div class="flex w-full flex-col space-y-1">
        <div class="shrink place-content-center font-sans font-semibold text-gray-700 sm:line-clamp-3">
          {props.title}
        </div>
        <div class="flex shrink place-items-center justify-between italic">
          <div class="line-clamp-2 whitespace-pre-line">{props.author}</div>
          <div class="shrink-0">{props.conference}</div>
        </div>
        <div class="place-content-center pb-1 sm:line-clamp-6">{props.description}</div>
      </div>

      <div class="flex place-items-center space-x-2">
        <Show when={props.pdfPath != ''}>
          <IconButton icon={FileText} name="PDF" url={props.pdfPath} />
        </Show>
        <Show when={props.link != ''}>
          <IconButton icon={Link} name="URL" url={props.link} />
        </Show>
        <span class="w-full grow" />
        {props.techIcon && (
          <img
            src={`https://skillicons.dev/icons?i=${props.techIcon}&theme=dark`}
            class="m-0 h-7"
            alt="Tech Icon"
            draggable={false}
          />
        )}
      </div>
    </div>
  );
}

function SingleImage(props: { image: string }) {
  const [isExpanded, setIsExpanded] = createSignal(false);
  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div class="h-full bg-gray-100">
      <img
        src={props.image}
        class={`animated m-0 h-48 w-full cursor-pointer object-cover sm:h-full sm:cursor-pointer`}
        alt="a figure in this paper"
        onClick={handleClick}
        draggable={false}
      />

      <Show when={isExpanded()}>
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={handleClick}
        >
          <img
            src={props.image}
            class="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            alt="a figure in this paper"
            draggable={false}
          />
        </div>
        <div class="fixed top-0 right-0 z-50">
          <button class="p-2 text-purple-mid hover:cursor-pointer" onClick={handleClick}>
            <X class="size-10" />
          </button>
        </div>
      </Show>
    </div>
  );
}

export default SinglePubCard;
