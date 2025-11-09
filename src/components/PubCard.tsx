import IconButton from './IconButton';
import { Show, createSignal } from 'solid-js';
import { FileText, Link } from 'lucide-solid';

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
        <div class="place-content-center pb-1 sm:line-clamp-4">{props.description}</div>
      </div>

      <div class="flex place-items-center space-x-2">
        <IconButton icon={FileText} name="PDF" url={props.pdfPath} />
        <Show when={props.link != ''}>
          <IconButton icon={Link} name="URL" url={props.link} />
        </Show>
        <span class="w-full grow"></span>
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

function SingleImage({ image }: { image: string }) {
  const [isExpanded, setIsExpanded] = createSignal(false);
  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div class="h-full bg-gray-100">
      <img
        src={image}
        class={`animated m-0 h-48 w-full cursor-pointer object-contain sm:h-full sm:cursor-default`}
        classList={{ 'h-96': isExpanded() }}
        alt="a figure in this paper"
        onClick={handleClick}
        draggable={false}
      />
    </div>
  );
}

export default SinglePubCard;
