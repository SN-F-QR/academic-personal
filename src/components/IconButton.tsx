import { type LucideIcon } from 'lucide-solid';
import { A } from '@solidjs/router';

type IconButtonProps = {
  icon: LucideIcon;
  name: string;
  url: string;
};

function IconButton(props: IconButtonProps) {
  return (
    <A
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      class="animated flex cursor-pointer rounded-lg bg-purple-mid px-2 py-1 text-gray-500 hover:bg-indigo-300 hover:no-underline hover:shadow-xs"
    >
      <props.icon class="mr-1 size-5" />
      {props.name}
    </A>
  );
}

export default IconButton;
