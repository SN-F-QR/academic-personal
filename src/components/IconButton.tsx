import { type LucideIcon } from 'lucide-solid';

type IconButtonProps = {
  icon: LucideIcon;
  name: string;
  url: string;
};

function IconButton(props: IconButtonProps) {
  return (
    <button
      class="animated flex cursor-pointer rounded-lg bg-purple-mid px-2 py-1 hover:bg-indigo-300 hover:shadow-xs"
      onClick={() => window.open(props.url, '_blank')}
    >
      <props.icon class="mr-1 size-5" />
      {props.name}
    </button>
  );
}

export default IconButton;
